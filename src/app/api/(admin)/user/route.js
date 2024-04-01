import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import UserService from "@/app/_services/User.service";

export const POST = async (req) => {
  try {
    await connectToDB();
    const user = await req.json();
    if (!user || !user.email || !user.password || !user.name || !user.id) {
      console.log(user);
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    const u = await new UserService().getUserById(user.id);
    if (!u) {
      return new NextResponse("User not found", { status: 404 });
    }
    if (u.role !== "admin") {
      return new NextResponse("You are not authorized to perform this action", {
        status: 401,
      });
    }
    try {
      const userData = await new UserService().registerUser({
        ...user,
        role: "admin",
      });
      return NextResponse.json({ id: userData._id });
    } catch (error) {
      return new NextResponse(error.message, { status: 401 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connectToDB();
    const user = await req.json();
    if (!user || !user.id) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    const u = await new UserService().getUserById(user.id);
    if (!u) {
      return new NextResponse("User not found", { status: 404 });
    }
    if (u.role !== "admin") {
      return new NextResponse("You are not authorized to perform this action", {
        status: 401,
      });
    }
    await new UserService().deleteUser(user.id);
    return new NextResponse("User deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    await connectToDB();
    const user = await req.json();
    if (!user || !user.id || !user.userId) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    const u = await new UserService().getUserById(user.id);
    if (!u) {
      return new NextResponse("User not found", { status: 404 });
    }
    if (u.role !== "admin") {
      return new NextResponse("You are not authorized to perform this action", {
        status: 401,
      });
    }
    await new UserService().updateUser({
      id: user.userId,
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return new NextResponse("User updated successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
