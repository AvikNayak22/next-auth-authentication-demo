import { User } from "@/model/user-model";

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email }).select("-password").lean();
    return user;
  } catch (error) {
    throw new Error(error);
  }
}
