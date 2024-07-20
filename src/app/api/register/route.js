import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";

import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  //Create a db connection
  await dbConnect();

  //Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);

  //Form a DB payload
  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  //Update the db
  try {
    await createUser(newUser);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }

  return NextResponse.json("User has been created", {
    status: 201,
  });
};
