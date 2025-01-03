import DetailsContainer from '@/components/hotelDetails/DetailsContainer'
import Reviews from '@/components/hotelDetails/Reviews'


export default function HotelDetails({ params }) {
    return (
        <>
            <DetailsContainer hotelId={params.hotelId} />
            <Reviews />
        </>
    )
}
