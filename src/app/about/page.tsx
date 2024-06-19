import { cookies } from "next/headers";

export default function About() {
  const cookieStore = cookies();
  const email = cookieStore.get("email")?.value;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-5">About</h1>
      {email ? (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">
            Logged in(<strong>{email}</strong>)
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Logged Out</h1>
        </div>
      )}
    </main>
  );
}
