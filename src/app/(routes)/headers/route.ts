import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    /*
    const reqHeaders=new Headers(request.headers);
    console.log(reqHeaders.get("Authorization"));
    */

    const headerList = await headers();
    console.log(headerList.get("Authorization"));
    console.log(request.cookies.get("theme"));

    const cookieStore=await cookies();
    cookieStore.set("message","Hello");
    console.log(cookieStore.get("message"))

    return new Response("<h2>Hello World!</h2>", {
        headers: {
            "Context-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}
