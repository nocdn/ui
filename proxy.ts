import { NextRequest, NextResponse } from "next/server"

const MD_ROUTES: Record<string, string> = {
  "/introduction": "/md/introduction.md",
  "/installation": "/md/installation.md",
  "/compatibility": "/md/compatibility.md",
  "/components/cornered-button": "/md/components/cornered-button.md",
  "/components/ticker": "/md/components/ticker.md",
  "/components/animated-button": "/md/components/animated-button.md",
  "/components/corner-banner": "/md/components/corner-banner.md",
  "/components/reasoning-traces": "/md/components/reasoning-traces.md",
  "/experiments/expanding-menu": "/md/experiments/expanding-menu.md",
  "/recreations/traffic-lights": "/md/recreations/traffic-lights.md",
  "/recreations/tiktok-loader": "/md/recreations/tiktok-loader.md",
  "/get-in-touch": "/md/get-in-touch.md",
  "/contributing": "/md/contributing.md",
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accept = request.headers.get("accept") ?? ""

  // Handle .md suffix: /introduction.md -> serve /md/introduction.md
  if (pathname.endsWith(".md")) {
    const basePath = pathname.slice(0, -3)
    const mdFile = MD_ROUTES[basePath]
    if (mdFile) {
      const url = request.nextUrl.clone()
      url.pathname = mdFile
      return NextResponse.rewrite(url, {
        headers: { "content-type": "text/markdown; charset=utf-8" },
      })
    }
  }

  // Handle Accept: text/markdown content negotiation
  if (accept.includes("text/markdown")) {
    const mdFile = MD_ROUTES[pathname]
    if (mdFile) {
      const url = request.nextUrl.clone()
      url.pathname = mdFile
      return NextResponse.rewrite(url, {
        headers: { "content-type": "text/markdown; charset=utf-8" },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|r/|md/).*)",
  ],
}
