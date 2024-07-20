import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-4">
        <h1>Sign in below</h1>
        <LoginForm />
        <p>
          Don&apos;t you have an account?
          <Link href="register" className="mx-2 underline">
            Register
          </Link>
        </p>
      </div>
    </>
  );
}
