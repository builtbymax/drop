import { getEntries, userHasSession } from "@/actions/server";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import EntryGrid from "@/components/entries/EntryGrid";
import Navigation from "@/components/header/Navigation";

const Dashboard = async () => {
  const queryClient = new QueryClient();
  const [session] = await Promise.all([
    userHasSession(),
    await queryClient.prefetchQuery({
      queryKey: ['entries'],
      queryFn: () => getEntries(null),
    }),
  ]);

  if (!session || !session.user) redirect("/login");

  return (
    <div>
      <h1>Dashboard</h1>
      <h2> Data: </h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Navigation />
        <EntryGrid />
      </HydrationBoundary>
    </div>
  );
};

export default Dashboard;