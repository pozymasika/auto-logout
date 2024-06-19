import { logout } from "@/actions/logout";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </form>
  );
}
