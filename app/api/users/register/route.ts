import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const {name, username, email, password, language} = await request.json();

    // P: Only if user is logged out
    // P: Prevent from creating if exitsing accounts exist

    if(!username || !email || !password || !name || !language) {
        return NextResponse.json({message: "All Fields are Required."}, {status: 400})
    }

    try {
        // Prisma logic to check if exist user exists
        // bcrypt to hash password
        // Prisma Logic to create user

        return NextResponse.json({message: "Created User"}, {status: 201});
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}