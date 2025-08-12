import prisma from "@/db/db.config";

export async function getUser() {
  try {
    const user = await prisma.user.findMany();
    console.log("user from server-", user);

    return user;
  } catch (err) {
    throw new Error("User is not fetched...");
  }
}
