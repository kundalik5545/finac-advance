export const dynamic = "force-dynamic"; // add this at the top of your file
import { getUser } from "@/action/user";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div>
      <h1>Dashboard Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
