import { doSocialLogin } from "../app/actions";

export default function LoginForm() {
  return (
    <form>
      <button
        className="bg-gray-400 text-gray-700 p-1 rounded-md m-1 text-lg"
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
