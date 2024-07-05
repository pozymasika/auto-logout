import { cookies } from "next/headers";

export const metadata = {
  title: 'Dashboard',
}

export default function dashboard() {
  const cookieStore = cookies();
  const email = cookieStore.get("email")?.value;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-5">Dashboard</h1>
      {email ? (
        <h1 className="flex flex-col text-4xl font-bold items-center">
          <span>Logged in</span>
          <span className="mt-3">({email})</span>
        </h1>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Logged Out</h1>
        </div>
      )}
    </main>
  );
}
