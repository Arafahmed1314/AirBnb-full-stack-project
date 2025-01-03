import connectMongo from "@/lib/db";
import { Hotel } from "@/models/hotel-model";

export async function GET(req) {
    try {
        // Connect to the database
        await connectMongo();

        // Get the page and limit from the query parameters
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page"))
        const limit = parseInt(url.searchParams.get("limit"))
        // Calculate the skip value based on the current page and limit
        const skip = (page - 1) * limit;

        // Fetch the properties with pagination
        const properties = await Hotel.find({})
            .skip(skip) // Skip properties based on the current page
            .limit(limit); // Limit the number of properties per page

        // Get the total count of properties (for pagination purposes)
        const totalProperties = await Hotel.countDocuments();

        // Calculate the total number of pages
        const totalPages = Math.ceil(totalProperties / limit);

        return new Response(
            JSON.stringify({
                properties,
                currentPage: page,
                totalPages,
                totalProperties,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error in GET API route:", error);
        return new Response(
            JSON.stringify({
                error: "Something went wrong while fetching properties.",
            }),
            { status: 500 }
        );
    }
}