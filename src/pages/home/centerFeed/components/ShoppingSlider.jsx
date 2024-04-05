


// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// import { courses } from '../../../../components/CoursesComponent/data';
import { Button } from '@nextui-org/react';
// import { GiGiftOfKnowledge } from 'react-icons/gi';

import ShoppingSliderCard from './ShoppingSliderCard';

import p1 from "../../../../assets/images/p1.png";
import p2 from "../../../../assets/images/p2.png";
import p3 from "../../../../assets/images/shoe.jpeg";
// import { TbShoppingCartUp } from 'react-icons/tb';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const products = [
    {img: p1, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p2, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p3, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p1, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p2, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p1, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p3, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p1, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
    {img: p2, name: "Airjordan 1", price: "44,000.00", description: "Air Force 1 Sneakers. Solid color nubuck leather upper. Perforated toe for extra breathability. Color matched flat laces. Tonal logo label sea..."},
  ]


























const ShoppingSlider = () => {


    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [curUser, setCurUser] = useState(null)
    // const [isAtRightMost, setIsAtRightMost] = useState(false);
    // const [isAtLeftMost, setIsAtLeftMost] = useState(true);
    // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    // const { setCurrentPickedChat } = useContext(SocketContext)
    // const [selectedChat, setSelectedChat] = useState(null)
    // const [showLargeChatContainer, setShowLargeChatContainer] = useState(false)

    // const {userData} = useCurrentUser()


    // const containerRef = useRef(null);

   const navigate =  useNavigate()


    const seaAll = ()=>{
        return navigate("/marketplace/shopping")
    }


  return (
    <div className=" bg-white rounded-xl py-7   w-full shadow-sm " >
        <div className=" flex items-center px-7 justify-between shadow-sm  py-1  pb-4 border-b">
            <div className="flex gap-x-2 items-center justify-between w-full" >
                <div className="flex gap-x-2 items-center">
                    <ShoppingCart size={25} color="pink"/>
                    <span className="text-lg font-bold">Shopping</span>
                </div>
                <div className=" flex gap-2">
                  <Button
                    variant="light"
                    size="sm"
                    className="  px-2 !rounded-full"
                    onClick={seaAll}
                  >
                    {" "}
                    <span className="font-medium text-base px-2 text-gray-600 " >See all</span>
                  </Button>
                </div>
            </div>
            <div>   
              
            </div>
        </div>

   

        <div className="py-1 flex relative w-full   ">


          



            <Swiper
              slidesPerView={'auto'}
              
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              scrollbar={{ draggable: true }}
            
            >
              {
                    products?.map((pr, i) => (
                      <SwiperSlide  key={i} className="py-2">
                        <ShoppingSliderCard  product={pr}/>
                      </SwiperSlide>
                      
                    ))
                }
            </Swiper>
        </div>

       
{/* 
      {
        <ChatDrawer
          isOpen={showLargeChatContainer}
          onClose={() => setShowLargeChatContainer(false)}
          user={selectedChat}
          setUser={() => setSelectedChat(null)}
        />
      } */}

    </div>
  )
}

export default ShoppingSlider
