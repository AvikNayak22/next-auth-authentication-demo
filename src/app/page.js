import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1>Sign in below</h1>
      <LoginForm />
    </div>
  );
}
