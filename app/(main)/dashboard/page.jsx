import { getUser } from "@/action/user";
import React from "react";

const DashboardPage = async () => {
  const user = await getUser(); // Assuming getUser is imported from action/user.js

  return (
    <div>
      <h1>Dashboard Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default DashboardPage;
