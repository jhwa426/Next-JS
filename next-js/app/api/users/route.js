// http://localhost:3000/api/users

export async function GET(request) {
    // Handle GET request for /api/users
    const users = [
        { id: 1, name: "Jeff" },
        { id: 2, name: "Jay" },
        { id: 3, name: "Jane" },
    ]

    // Send the user as a response
    return new Response(JSON.stringify(users));
}