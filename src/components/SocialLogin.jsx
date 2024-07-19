import { doSocialLogin } from "../app/actions";

export default function SocialLogin() {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-blue-400 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Sign In with google
      </button>

      <button
        className="bg-black text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="github"
      >
        Sign in with gitHub
      </button>
    </form>
  );
}
