import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the hostname of the incoming request
  const hostname = request.headers.get("host") || "";

  // Check if the request is for the blog subdomain
  if (hostname.startsWith("blog.")) {
    // Create a new URL for the blog app
    const url = new URL(request.url);

    // In development, you might use a different port or domain
    if (process.env.NODE_ENV === "development") {
      url.port = "3001";
    } else {
      // In production, set the hostname to your blog app's domain
      url.hostname = "your-blog-app-domain.vercel.app";
    }

    // Rewrite the request to the new URL
    return NextResponse.rewrite(url);
  }

  // For all other requests, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
