
const getConversationById = (conversationId: string) => {
    // P: only user that is inside of these conversations can retrieve the conversations
    // P: Must be logged in
    try {
        // Prisma Logic to get conversation by the Id
        //return conversation
    } catch (err) {
        console.log(err);
        return null
    }
};

export default getConversationById;