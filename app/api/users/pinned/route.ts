import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {userId, conversationId} = await request.json();
    // P: Only conversations that user is in can be pinned
    // P: Only user can pin conversations for themselves cannot for others
    // P: Must be logged in
    try {
        // Prisma Logic to push new conversationId to pinned Convos of user
        return NextResponse.json({message: "Conversation was Pinned."}, {status: 201})
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500})
        
    }
}