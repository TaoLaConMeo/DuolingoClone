// app/admin/page.tsx
import { redirect } from "next/navigation";
import { getIsAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";

// Dynamically import the App component only in the client-side
const ClientApp = dynamic(() => import("./app"), { ssr: true });

const AdminPage = async () => {
  // Call server-side logic to check if the user is an admin
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    redirect("/"); // Redirect if the user is not an admin
    return null; // Prevent further rendering
  }

  // Render the ClientApp component if the user is an admin
  return (
    <div>
      <ClientApp />
    </div>
  );
};

export default AdminPage;
