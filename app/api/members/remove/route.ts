import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {userId, conversationId} = await request.json();
    // P: Only admin of the group can remove members
    // P: This route only applies to groups
    // P: Must be logged in 
    try {
        // Prisma Logic to check if I am admin of this group
        // Prisma Logic to check if it is a group
        // Prisma Logic to remove member id from conversation
        return NextResponse.json({message: "Removed Member from Group chat"}, {status: 201});
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}