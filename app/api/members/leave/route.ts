import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {userId, conversationId} = await request.json();
    // P: Can only leave groups, not solo conversations
    // P: Only users of the conversation can leave group
    // P: Update admin if he is the one leaving
    // P: Must be logged in
    try {
        // Prisma Logic to check I am in this group
        // Prisma Logic to check if it is a group
        // Prisma Logic to remove my member id from conversation
        // Prisma Logic to check if I am admin, then change admin if so
        return NextResponse.json({message: "Left the Group Chat"}, {status: 201});
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}