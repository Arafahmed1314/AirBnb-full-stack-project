import { Hotel } from "@/models/hotel-model";
import connectMongo from "./db";


export async function getAllHotels() {
    await connectMongo();
    const hotels = await Hotel
        .find()
        .select(["name", "location", "images", "price_per_night", "available_rooms", "max_guests", "beds", "bedrooms", "description"])
        .lean();

    return hotels;
}
