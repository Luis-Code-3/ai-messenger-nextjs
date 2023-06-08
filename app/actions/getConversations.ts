
const getConversations = () => {
    // P: only user that is inside of these conversations can retrieve the conversations
    // P: Must be logged in
    try {
        // Prisma Logic to get all conversations
        //return allConversations
    } catch (err) {
        console.log(err);
        return null
    }
};

export default getConversations;