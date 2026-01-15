import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girls from "../assets/girls.png";
import boys from "../assets/boys.png";
import car from "../assets/car.jpeg"
import doll from "../assets/doll.jpeg"
import newcar from "../assets/newcar.jpeg"
import newborn from "../assets/newborn.jpeg"
import draw from "../assets/draw.jpeg"
import teddy from "../assets/teddy.jpeg"
import robot from "../assets/robot.jpeg"
import barbie from "../assets/barbie.jpeg"
import chess from "../assets/chess.jpeg"
import doctor from "../assets/doctor.jpeg"
import offercar from "../assets/offercar.jpeg"
import onefree from "../assets/onefree.jpeg"
import arrival from "../assets/arrival.jpeg"
import newarrivals from "../assets/newarrivals.png"
import dollhouse from "../assets/dollhouse.jpeg"
import off50 from "../assets/off50.jpeg"


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const offers = [
  {img: offercar, img2:onefree},
  {img: arrival, img2:newarrivals},
  {img: dollhouse, img2:off50},
  ];

     
   const CategoryCard = ({img, title}) => (
     <div className="cursor-pointer border rounded-xl shadow-md overflow-hidden transition transform duration-300 hover:scale-105">
    <img src={img} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 rounded">
      {title}
    </div>
  </div>
   )


  const offers2 = [
  {img: car, name: "Sports cars", desc: "40-50% off"},
  {img: doll, name: "dolls", desc: "save 30%"},
  {img: newborn, name: "NewBorn", desc: "new arrivals"},
  {img: draw, name: "Drawing", desc: "special offer"},
  {img: teddy, name:"Teddy", desc: "new arrivals"},
  {img: newcar, name: "vintage cars", desc: "save 20%"},
  {img: robot, name: "Robots", desc: "special offer"},
  {img: barbie, name: "Barbies", desc: "girl'special"},
  {img: doctor, name: "Set toys", desc: "save 10%"},
  {img: chess, name: "Board games", desc: "save 50%"},
  ];

  const sections = [
    "About",
    "Help",
    "Consumer Policy",
    "Group companies",
    "Mail us",
  ];

  const features = [
    {
      icon: "🧸",
      title: "100% Safe & Non-Toxic",
      desc: "All our toys are child-safe, certified and made with non-toxic materials.",
    },
    {
      icon: "🚚",
      title: "Free & Fast Delivery",
      desc: "Enjoy free shipping on orders above ₹499 with quick delivery.",
    },
    {
      icon: "💰",
      title: "Affordable & Trusted",
      desc: "Best deals, trusted brands and hassle-free return policy.",
    },
  ];


  return (
    <div className="md:h-full flex flex-col justify-start pt-[50px] items-center bg-pink-700">
      <div className="w-full cursor-pointer">
        <Slider {...settings}>
          {offers.map((offer, index) => (
            <div key={index} className="px-2">
              <div className="bg-white md:h-[50vh] flex items-center justify-center rounded-xl border border-pink-200 text-2xl font-semibold shadow-md text-center p-4 overflow-hidden">
                <img
                src={offer.img}
                className="w-[30%] object-cover "
                />
                <img 
                src={offer.img2}
                className="w-[30%] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

  <div className="md:h-[60vh] w-full flex justify-around mt-10 px-4 gap-4">
        <CategoryCard img={girls} title="For Girls" />
        <CategoryCard img={boys} title="For Boys" />
      </div>
      <div className=" w-full  mt-10 px-4 ">
        <Slider {...settings2}>
          {offers2.map((offer, index) => (
            <div key={index} className="px-2 pt-2 h-[350px] ">
              <div className="bg-white md:h-[300px] flex flex-col items-center justify-center rounded-xl border border-white text-lg md:text-xl font-semibold shadow-md text-center p-3 cursor-pointer transition transform duration-300 hover:scale-105 hover:shadow-xl relative z-10 ">
                <img
                src={offer.img}
                alt={`offer-${index}`} 
                className="h-full w-full object-contain rounded-xl"
                />
                <div className="pb-2">
                <h2>{offer.name}</h2>
                <p className="font-thin text-lg">{offer.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-pink-100 mt-10 py-10 px-4 w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-700">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition transform duration-200 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg">
                {item.icon} {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-white w-full mt-10 flex justify-center gap-10 flex-wrap p-4">
        {sections.map((title, i) => (
          <div
            key={i}
            className=" w-[200px] md:h-[40vh] mt-5 p-4 rounded-lg shadow"
          >
            <h2 className="underline text-center mb-2">{title}</h2>
            <div className=" mt-7 p-2 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, corporis!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


