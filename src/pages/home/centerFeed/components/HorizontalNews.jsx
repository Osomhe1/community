import MediumNews from "./MediumNews";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import './slide.css';


// import required modules
import { Pagination,  } from 'swiper/modules';

const HorizontalNews = () => {
  return (
    <div className=" bg-white rounded-xl py-7   w-full shadow-sm overflow-x-auto">
      <div className=" flex items-center px-7 justify-between shadow-sm  py-1  pb-4 border-b">
        <div className="flex gap-x-2">
          <span className="text-lg font-bold">Trending News</span>
        </div>
      </div>

      <div className="py-7 bg-white flex justify-end ">
        {/* <div className="flex mx-auto   w-full gap-x-6 py-2 overflow-x-auto scrollbar-none relative bg-transparent ">

            <MediumNews/>
            <MediumNews/>
            <MediumNews/>
        </div> */}


        <Swiper
              slidesPerView={'auto'}
              // centeredSlides={true}
              // spaceBetween={20}
              // breakpoints={{
              //   690: {
              //     slidesPerView: 2,
              //     spaceBetween: 30,
              //   },
              //   768: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              //   1065: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              //   1090: {
              //     slidesPerView: 2,
              //     spaceBetween: 30,
              //   },
              //   1247: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              //   1310: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              //   1380: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
                
              //   1500: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              //   1550: {
              //     slidesPerView: 2,
              //     spaceBetween: 30,
              //   },
              // }}
           
              // pagination={{
              //   type: 'fraction',
              // }}
       
              modules={[Pagination,]}
              className="mySwiper"
            >
              <SwiperSlide>
                  <MediumNews/>
              </SwiperSlide>
              <SwiperSlide>
                  <MediumNews/>
              </SwiperSlide>
              <SwiperSlide>
                  <MediumNews/>
              </SwiperSlide>
           
            </Swiper>
      </div>
    </div>
  );
};

export default HorizontalNews;
