import { NextResponse } from "next/server";

type IParams = {
    conversationId: string;
}

export async function DELETE(request: Request, {params}: {params: IParams}) {
    const conversationId = params.conversationId;
    // P: Both users can delete solo conversation
    // P: Only users of the conversation can delete a solo conversation
    // P: Only admin can delete group conversation
    // P: Check if conversation exists
    // P: Must be logged in
    try {
        // Prisma Logic
    } catch (err) {
        console.log(err);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}