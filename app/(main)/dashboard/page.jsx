// export const dynamic = "force-dynamic"; // add this at the top of your file

// import { getUser } from "@/action/user";

// export default async function DashboardPage() {
//   const user = await getUser();

//   return (
//     <div>
//       <h1>Dashboard Page</h1>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }

"use client";
import { getUser } from "@/action/user";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
