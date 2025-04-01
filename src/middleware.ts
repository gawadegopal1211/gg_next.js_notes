import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    //return NextResponse.redirect(new URL('/', request.url));

    if (request.nextUrl.pathname === '/profiles') {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    const newResponse = NextResponse.next();
    const theme = request.cookies.get('theme');

    if (!theme) {
        newResponse.cookies.set('theme', 'light');
    }

    newResponse.headers.set("val", "1");

    return newResponse;
}

/*
export const config = {
    matcher: '/profiles'
}
*/
