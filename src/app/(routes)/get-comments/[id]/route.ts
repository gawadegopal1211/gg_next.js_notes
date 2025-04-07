import { arr } from "@/app/parallel-intercepting/arr";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id;

    const getele = arr.filter((v) => v.id === parseInt(id))

    return Response.json(getele);
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id;

    const body = await request.json();

    const { name, description } = body;

    const index = arr.findIndex((v) => v.id === parseInt(id))
    arr[index].name = name;
    arr[index].description = description;

    return Response.json(arr[index]);
}


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id;

    const index = arr.findIndex((v) => v.id === parseInt(id));
    const delele = arr[index];
    arr.splice(index, 1);
    return Response.json(delele);
}
