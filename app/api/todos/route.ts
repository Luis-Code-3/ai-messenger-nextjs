import { NextResponse } from "next/server";

const dataUrl:string = "www.google.com";

export async function GET() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await res.json();
    // console.log(todos);
    



    return NextResponse.json(todos)
}



export async function POST(request: Request) {

    const {userId, title} = await request.json();
    

    if(!userId || !title) return NextResponse.json({message: "Fill out all fields."}, {status: 400});

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': 'pciket'
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    });

    const createdTodo = await res.json();

    return NextResponse.json(createdTodo, {status: 201});
}