"use client";

import LogoutButton from "./LogoutButton";

type Props = {
  email?: string;
};

export default function AuthButtons({ email }: Props) {
  return (
    <>
      {email ? (
        <LogoutButton />
      ) : (
        <a
          href="/login"
          className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
        >
          Login
        </a>
      )}
    </>
  );
}
