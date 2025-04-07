import { arr } from "@/app/parallel-intercepting/arr";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    const fil_ele = query ? arr.filter((v) => v.name.includes(query)) : arr;

    return Response.json(fil_ele);
}
//http://localhost:3000/getquery?query=Abc

