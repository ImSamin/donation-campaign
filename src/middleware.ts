import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: "abcde" });
  const { pathname } = request.nextUrl;

  const role = token?.role;

  if (role === "admin" && pathname.startsWith("/admin")) {
    return NextResponse.next();
  } else if (role === "user" && pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(`http://localhost:3000/`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:page*", "/dashboard"],
};
