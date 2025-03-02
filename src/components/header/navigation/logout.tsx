'use client';

import { authClient } from "@/auth/client";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login'); // redirect to login page
        },
      },
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}
LogoutButton.displayName = "LogoutButton";