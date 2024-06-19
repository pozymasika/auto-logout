import { login } from "@/actions/login";

export default function LoginForm() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <form
          className="flex flex-col items-center mt-8"
          action={login}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-96 p-2 border border-gray-300 text-black rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-96 p-2 border border-gray-300 text-black rounded-md mt-4"
          />
          <button className="w-96 p-2 bg-blue-500 text-white rounded-md mt-4">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
