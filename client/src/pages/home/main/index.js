import React from 'react'
import SearchComponent from "../../../components/home/search/index"
import TourComponent from "../../../components/home/tour/index"
import HotelComponent from "../../../components/home/hotel/index"
import RestaurantComponent from "../../../components/home/restaurant/index"
import SectionFComponent from "../../../components/home/sectionFooter/index"


const index = () => {
  return (
    <>
        <main>
            <SearchComponent />
            <TourComponent />
            <HotelComponent />
            <RestaurantComponent />
            <SectionFComponent />
        </main>
        {/* <!-- /main --> */}
    </>
  )
}

export default index