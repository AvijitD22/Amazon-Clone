import React from "react";
import Banner from "../images/banner.jpg";
import "./Home.css"
import Product from "./Product";
import BookImage from "../images/The_Lean_Startup.jpg";
import Phone from "../images/phone.png";
import Laptop from "../images/alienware.png";
import Monitor from "../images/monitor.png";
import Watch from "../images/watch.png";
import Iphone from "../images/iphone.png";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src={Banner}
        alt="motorola-banner" />

      {/* 1st Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id={1}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={495}
          rating={5}
          image={BookImage} />
        <Product
          id={2}
          title="Dell Alienware x14 Gaming Laptop,Intel i7-12700H Windows 11,14(35.5cm) FHD 144Hz 400nits GSYNC+Advanced Optimus,16GB DDR5,512GB SSD,Nvidia RTX 3050 Ti 4GB,Dolby Atmos,Lunar Light(1.84 kg) D569938WIN9"
          price={162990}
          rating={4}
          image={Laptop} />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage) "
          price={124999}
          rating={4}
          image={Phone} />
        <Product
          id={4}
          title="Titan Classique Analog Blue Dial Men's Watch-NN90102SM01 "
          price={9795}
          rating={5}
          image={Watch} />
        <Product
          id={5}
          title="
          Apple iPhone 14 Pro Max (256 GB) - Deep Purple"
          price={141990}
          rating={5}
          image={Iphone} />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Samsung 123.9cm (49 inch) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
          price={138999}
          rating={4}
          image={Monitor} />
      </div>
    </div>
  );
}

export default Home;
