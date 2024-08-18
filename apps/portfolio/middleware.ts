import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the request is coming from blog.localhost:3000
  if (request.headers.get("x-forwarded-host") === "blog.localhost:3000") {
    // Rewrite the URL to point to localhost:3001
    url.hostname = "localhost";
    url.port = "3001";
    return NextResponse.rewrite(url);
  }
}
