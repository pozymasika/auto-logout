import { cookies } from "next/headers";

export function POST() {
  cookies().delete("email");
  return Response.json({ success: true });
}
