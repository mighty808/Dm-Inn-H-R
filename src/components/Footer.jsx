import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full bg-background flex flex-col mt-12 md:flex-row md:justify-between md:px-6 gap-4 py-4 items-center ">
      <div className="flex flex-col items-center">
        <h1 className="text-text font-bold  text-2xl">DM INN</h1>
        <p className="text-[.8rem] text-text">
          HOSTELS & <br /> RESIDENCE
        </p>
        <p className="text-text mt-1">1 Alphabet parkway, Sakumono, Ghana</p>
        <p className="text-text mt-1">+233 55 053 3975 | +31 62 343 9751</p>
        <p className="text-text mt-1 underline">
          info@dminn.me |{" "}
          <span className="italic underline">mkissi@dminn.me</span>
        </p>
      </div>

      <div className="flex flex-row md:flex-col items-center gap-2">
        <p className="md:text-text underline">About Us </p>
        <p className="md:text-text underline">Contact </p>
        <p className="md:text-text underline">Terms and Conditions</p>
      </div>

      <div className="flex flex-row md:flex-col items-center gap-2 justify-center">
        <div className="flex flex-row items-center gap-2 justify-center">
          <FaFacebook className="text-text" />
          <p className="text-text">Facebook</p>
        </div>

        <div className="flex flex-row items-center gap-2 justify-center">
          <FaInstagram className="text-text" />
          <p className="text-text">Instagram</p>
        </div>

        <div className="flex flex-row items-center gap-2 justify-center">
          <FaTwitter className="text-text" />
          <p className="text-text">Twitter</p>
        </div>
      </div>
      <div className="">
        <p className=" text-text text-center">Subscribe to our news Letter</p>
        <div className="">
          <input className="p-2 outline-none" />
          <button type="" className="bg-primary text-text p-2 border-collapse">
            Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
