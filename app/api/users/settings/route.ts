import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {userId, name, username, email, image, password, language} = await request.json();

    // P: Only user can change their own profile details
    // P: Can not change to username/email that exists
    // P: Must be logged in
    try {
        // Prisma Logic checking if new username/email they want to change to exists or not
        // Logic to change only updated fields that need to be changed
        // Prisma Logic to update the user
        return NextResponse.json({message: "Profile has been Updated."}, {status: 201});
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}