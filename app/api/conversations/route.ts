import { NextResponse } from "next/server";

type ConvoData = {
    isGroup: boolean;
    lastMessageAt: number;
    members: string[];
    name?: string;
    image?: string;
    admin?: string;
}

export async function POST(request: Request) {
    const {name, isGroup, image, members, admin} = await request.json();

    try {
        const conversationData:ConvoData  = {
            isGroup,
            lastMessageAt: Date.now(),
            members
        };

        if (isGroup) {
            conversationData.name = name;
            conversationData.image = image;
            conversationData.admin = admin;
        }

        // Must be logged in
        // Prisma Logic for creating conversation
        // Prisma Logic for checking if solo conversation exists
        return NextResponse.json({message: "New Conversation Created"}, {status: 201})
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500})
        
    }
}