import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import UserService from "@/app/_services/User.service";

export const POST = async (req) => {
  try {
    await connectToDB();
    const user = await req.json();
    if (!user || !user.email || !user.password || !user.name) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    const userData = await new UserService().registerUser({
      name: user.name,
      email: user.email,
      password: user.password,
      role: "admin",
    });
    return NextResponse.json({ id: userData._id });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
