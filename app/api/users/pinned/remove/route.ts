import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {userId, conversationId} = await request.json();
    // P: Only conversations that user is in can be pinned removed
    // P: Only user can remove pin conversations for themselves cannot for others
    // P: Must be logged in
    try {
        // Prisma Logic to remove new conversationId to pinned Convos of user
        return NextResponse.json({message: "Conversation was removed from Pinned."}, {status: 201})
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500})
        
    }
}