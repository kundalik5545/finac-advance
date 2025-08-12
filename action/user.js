import prisma from "@/db/db.config";

export async function getUser() {
  try {
    const user = await prisma.user.findMany();

    return user;
  } catch (err) {
    throw new Error("User is not fetched...");
  }
}
