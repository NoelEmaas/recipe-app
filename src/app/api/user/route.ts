import { NextResponse } from "next/server";
import { User } from "@/types/user.type";

import FileUtility from "@/utils/fileUtility";

const fileUtility = new FileUtility<User>("user");

export async function GET () {
  const users = await fileUtility.read();
  
  return NextResponse.json(users);
}