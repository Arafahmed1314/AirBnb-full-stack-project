import Link from "next/link";
import React from "react";
import HotelCard from "./HotelCard";
export default function HotelList() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Link href="/hotelDetails" className="block group">
          <HotelCard />
        </Link>
        <Link href="/hotelDetails" className="block group">
          <HotelCard />
        </Link>
        <Link href="/hotelDetails" className="block group">
          <HotelCard />
        </Link>
        <Link href="/hotelDetails" className="block group">
          <HotelCard />
        </Link>
      </div>
    </section>
  );
}
