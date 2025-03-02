import { userHasSession } from "@/actions/server";
import { getAllEntries } from "@/actions/entries";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import EntriesWrapper from "@/components/entries";
import Navigation from "@/components/header/navigation";

const Dashboard = async () => {
  const queryClient = new QueryClient();
  const [session] = await Promise.all([
    userHasSession(),
    await queryClient.prefetchQuery({
      queryKey: ['entries'],
      queryFn: () => getAllEntries(null),
    }),
  ]);

  if (!session || !session.user) redirect("/login");

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Navigation />
      <EntriesWrapper />
    </HydrationBoundary>
  );
};

export default Dashboard;