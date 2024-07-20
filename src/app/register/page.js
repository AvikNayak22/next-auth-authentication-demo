import RegistrationForm from "@/components/RegistrationForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <p>
        Already you have an account?
        <Link href="/" className="mx-2 underline">
          Login
        </Link>
      </p>
      <RegistrationForm />
    </>
  );
};

export default RegisterPage;
