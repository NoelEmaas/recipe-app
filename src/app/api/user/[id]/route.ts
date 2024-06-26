import { NextResponse } from "next/server";
import { User } from "@/types/user.type";

import FileUtility from "@/utils/fileUtility";

const fileUtility = new FileUtility<User>("user");

export async function GET (request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const users = await fileUtility.read();
  const user = users.find((user: User) => user.id === Number(id));

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}