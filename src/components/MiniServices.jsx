import { FaMapLocation } from "react-icons/fa6";
import "../components/input.css";
import { FaMoneyBill, FaUser } from "react-icons/fa";
const MiniServices = () => {
  // const miniServices = [
  //     {id:1 , icon:<FaMapLocation/> , headText:'Destination',subText:''}
  //     {id:2 , icon: , headText:'CheckIn',subText:''}
  //     {id:3 , icon:<FaMapLocation/> , headText:'CheckOut',subText:''}
  //     {id:4 , icon:<FaMapLocation/> , headText:'Rooms for',subText:''}
  // ]
  return (
    <section className="md:bg-background bg-secondary w-[80%] md:w-full m-auto flex shadow-md items-center justify-center py-2 relative top-[-2vh] md:top-0 rounded-tr-3xl md:rounded-none">
      <div className="w-[80%] rounded-full bg-secondary py-2 flex flex-col md:flex-row gap-4 p-4 justify-center  ">
        <div className="flex gap-4 justify-center items-center ">
          <FaMapLocation className="text-primary" />
          <div className="">
            <p className=" font-bold text-primary">Destination</p>
            <p className="text-[.9rem]">Ghana, Kwawu</p>
          </div>
          <div className="border h-full border-background"></div>
        </div>

        <div className="flex  gap-4 justify-center items-center">
          <input
            type="date"
            className="w-4 h-8 text-primary placeholder:text-primary"
            style={{}}
          />
          <div className="">
            <p className="font-bold text-primary">checkIn</p>
            <p className="text-[.9rem]">Destination</p>
          </div>
          <div className="border h-full  border-background"></div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <input type="date" className="w-4 h-8" />
          <div className="">
            <p className="font-bold text-primary">Check out</p>
            <p className="text-[.9rem]">Destination</p>
          </div>
          <div className="border h-full border-background"></div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <FaUser className="text-primary" />
          <div className="">
            <p className="font-bold text-primary">Rooms for</p>
            <p className="text-[.9rem]">Destination</p>
          </div>
          <div className="border h-full border-background"></div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <FaMoneyBill className="text-primary" />
          <div className="">
            <p className="font-bold text-primary"> Promo code</p>
            <input
              type="text"
              className="px-1 w-24 border border-background rounded-lg  outline-none	bg-transparent"
            />
          </div>
          <div className="border h-full border-background"></div>
        </div>

        <button
          type=""
          className="text-text w-20 bg-primary rounded-md h-10 m-auto md:m-0 md:my-auto "
        >
          search
        </button>
      </div>
    </section>
  );
};

export default MiniServices;
