import { NextResponse } from "next/server";
import { getSession } from "./app/lib/session";

export async function middleware(request) {
  const session = await getSession();

  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/dashboard/users", "/dashboard/products"];

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!session && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  //ngan chan nguoi dung khi da dang nhap ma co truy cap vao trang login
  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/dashboard/users", "/dashboard/products"],
};
