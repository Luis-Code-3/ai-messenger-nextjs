
const getMessages = (conversationId: string) => {
    // P: Only members inside the conversation can retrieve this
    // P: Must be logged in
    // P: Check if conversation exists
    try {
        // Prisma Logic to get all Messages from conversation Id
        //return messages
    } catch (err) {
        console.log(err);
        return []
    }
};

export default getMessages;