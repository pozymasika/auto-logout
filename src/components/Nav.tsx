import { cookies } from "next/headers";
import AuthButtons from "./AuthButtons";

export default function Nav() {
  const cookieStore = cookies();
  const email = cookieStore.get("email")?.value;
  return (
    <nav className="flex flex-col items-center justify-center w-full h-16 bg-blue-500 text-white">
      <ul className="flex items-center justify-center">
        <li className="mx-4">
          <a href="/">Home</a>
        </li>
        <li className="mx-4">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="mx-4">
          <a href="/about">About</a>
        </li>
        <li className="mx-4">
          <AuthButtons email={email} />
        </li>
      </ul>
    </nav>
  );
}
