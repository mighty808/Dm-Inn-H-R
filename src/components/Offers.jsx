import rooms from "/2519.jpg";
import facilities from "/POOL 09.jpg";
import premium from "/render-master-bedroom.jpg";
import luxury from "/2508.jpg";
import shuttle from "/2519.jpg";
import services from "/2524.jpg";

const Offers = () => {
  const offers = [
    { id: 1, imageText: "ROOMS", buttonText: "Find Yours", image: rooms },
    {
      id: 2,
      imageText: "SHUTTLE SERVICES",
      buttonText: "Learn more",
      image: shuttle,
    },
    {
      id: 3,
      imageText: "FACILITIES",
      buttonText: "View more",
      image: facilities,
    },
    {
      id: 4,
      imageText: "PREMIUM ROOMS",
      buttonText: "Find yours",
      image: premium,
    },
    {
      id: 5,
      imageText: "LUXURY OVERNIGHT STAY",
      buttonText: "Learn more",
      image: luxury,
    },
    { id: 6, imageText: "SERVICES", buttonText: "Explore", image: services },
  ];

  return (
    <section className="w-full py-16">
      <p className="text-center py-4">
        Visit Our Amazing Hotel & Residence And Have The Power Of Luxury
      </p>
      <section className="w-[80%] m-auto grid grid-cols-[100%] md:grid-cols-[33%,33%,33%] gap-x-3 gap-y-10 items-center justify-center">
        {offers.map((offer) => (
          <div
            className="relative flex flex-col justify-between "
            key={offer.id}
          >
            <img
              src={offer.image}
              alt={offer.imageText}
              className="w-full h-60 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex flex-col justify-between py-4 items-center text-white text-lg">
              <p className="text-center text-text font-medium italic">
                {offer.imageText}
              </p>
              <button className="bg-primary text-text px-2 py-1 rounded-lg">
                {offer.buttonText}
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Offers;
