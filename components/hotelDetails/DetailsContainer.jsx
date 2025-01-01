import Image from "next/image";
import React from "react";
import BookingCard from "./BookingCard";
import StarIcon from "../svgIcon/StarIcon";
import {
  FaUmbrellaBeach,
  FaSwimmingPool,
  FaWifi,
  FaUserFriends,
  FaDoorOpen,
  FaBed,
  FaSink,
} from "react-icons/fa";

export default function DetailsContainer() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* <!-- Property Title and Rating --> */}
      <div className="mb-6">
        <h1 class="text-3xl font-bold mb-2">Maldives Paradise</h1>
        <div class="flex items-center text-gray-600">
          {/* <i class="fas fa-star text-yellow-500 mr-1"></i> */}
          <StarIcon />
          <span>5 · </span>
          <span class="ml-2">2 reviews</span>
          <span class="mx-2">·</span>
          <span class="">Maldives, Tropical Paradise</span>
        </div>
      </div>

      {/* <!-- Image Gallery --> */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
        <div class="col-span-2 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main Room"
            height={450}
            width={800}
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Room 1"
            height={450}
            width={800}
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Room 2"
            height={450}
            width={800}
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Room 3"
            height={450}
            width={800}
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Room 4"
            height={450}
            width={800}
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* <!-- Property Details --> */}
      <div className="grid grid-cols-3 gap-8">
        {/* <!-- Left Column: Property Description --> */}
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Entire villa hosted by Sarah
            </h2>
            <div className="grid grid-cols-3 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUserFriends size={20} />
                <span>6 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <FaDoorOpen size={20} />
                <span>3 bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBed size={20} />
                <span>4 beds</span>
              </div>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="text-gray-700 leading-relaxed">
              Experience luxury in this stunning beachfront villa nestled in the
              heart of the Maldives. Our spacious 3-bedroom villa offers
              breathtaking ocean views, private pool, and direct beach access.
              Enjoy modern amenities, traditional Maldivian architecture, and
              unparalleled comfort in this tropical paradise.
            </p>
          </div>

          {/* <!-- Amenities --> */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              What this place offers
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FaUmbrellaBeach size={20} />
                <span>Beach access</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSwimmingPool size={20} />
                <span>Private pool</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWifi size={20} />
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSink size={20} />
                <span>Kitchen</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Column: Booking Card --> */}
        <BookingCard />
      </div>
    </div>
  );
}
