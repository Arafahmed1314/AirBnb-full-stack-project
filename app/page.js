import Footer from "@/components/Footer";

import HotelList from "@/components/hotelListing/HotelList";
import Pagination from "@/components/Pagination";

import { getHotels } from "@/utils/getHotels";


export default async function Home() {
  const data = await getHotels();
  // console.log(data);

  return (
    <>

      <HotelList />
      <Pagination />
      <Footer />
    </>
  );
}
