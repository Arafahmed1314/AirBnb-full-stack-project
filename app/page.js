import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HotelList from "@/components/hotelListing/HotelList";
import Pagination from "@/components/Pagination";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <HotelList />
      <Pagination />
      <Footer />
    </>
  );
}
