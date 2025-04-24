"use client";

import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/about", title: "About Us", id: 1 },
    { href: "/blog", title: "Blogs", id: 2 },
    { href: "/dashboard", title: "Dashboard", id: 3 },
    { href: "/docs", title: "Documents", id: 4 },
    { href: "/products", title: "Products", id: 5 },
    { href: "/profile", title: "Profile", id: 6 },
    { href: "/login", title: "Login", id: 7 },
    { href: "/register", title: "Register", id: 8 },
    { href: "/forgot-password", title: "Reset Password", id: 9 },
    { href: "/articles", title: "Articles", id: 10 },
    { href: "/newproducts", title: "New Products", id: 11 },
    { href: "/server-cmp", title: "Server Components", id: 12 },
    { href: "/fetchfromserver", title: "Fetch Data", id: 13 }
  ]

  return (
    <div>
      <h1>Next.js Notes</h1>

      {links.map((v) => {
        return (
          <div key={v.id}>
            <Link href={v.href}>
              <p className="m-2 font-semibold">{v.title}</p>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
