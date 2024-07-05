"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutButton() {
  const router = useRouter();
  async function onButtonClick() {
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    if (response.ok) {
      localStorage.setItem("logout", new Date().toString());
      router.push("/login?t=" + Date.now());
    } else {
      console.error("Failed to logout");
    }
  }

  function onLogoutChanged(evt: StorageEvent) {
    if (evt.key === "logout") {
      router.push("/login?t=" + Date.now());
    }
  }

  useEffect(() => {
    addEventListener("storage", onLogoutChanged);
  }, []);

  return (
    <button
      onClick={onButtonClick}
      type="submit"
      className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}
