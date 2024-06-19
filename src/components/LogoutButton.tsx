"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutButton() {
  const router = useRouter();
  async function onButtonClick() {
    await fetch("/api/logout", {
      method: "POST",
    });

    localStorage.setItem("logout", Date.now().toString());
    router.push("/login?t=" + Date.now());
  }

  function onStorageChange(event: StorageEvent) {
    if (event.key === "logout") {
      router.push("/login?t=" + Date.now());
    }
  }

  useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  return (
    <button
      type="submit"
      onClick={onButtonClick}
      className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}
