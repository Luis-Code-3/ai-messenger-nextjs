import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {text, image, conversation, sender} = await request.json();
    // P: Needs a Conversation Id, and the sender of this message must also be in that conversation.
    // P: Must be logged in
    try {
        // Prisma Logic for creating Message
        // Prisma Logic for Adding new Message to Conversation
        return NextResponse.json({message: "Created New Message"}, {status: 201});
    } catch (err) {
        console.log(err);
        NextResponse.json({message: "Error"}, {status: 500});
    }
}