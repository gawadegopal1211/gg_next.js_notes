import { arr } from "@/app/parallel-intercepting/arr";

export async function GET() {
    return Response.json(arr);
}

export async function POST(request: Request) {
    const newreq = await request.json();

    const newentry = {
        id: arr.length + 1,
        name: newreq.name,
        description: newreq.description
    };

    arr.push(newentry);

    return new Response(JSON.stringify(newentry), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}
