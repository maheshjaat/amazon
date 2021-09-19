import React from 'react'
import Takla from "./images/bgaz.jpeg"
import "./Home.css"
import Product from './Product'
import Mac from "./images/macbook-air.jpeg"
import Ear from "./images/earphone.jpg"
import Mask from "./images/mask.webp"
import Oil from "./images/oil.jpg"
import Moni from "./images/moniter.jpg"
import Tst from "./images/ts.jpg"

function Home() {
    return (
        <div className="home"> 
          <img className="home__image" 
           src={Takla}
           alt="" />
          <div className="home__row">
          <Product 
        id="12346"
        title="Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Yellow)"
        price={20}
        rating={5}
        image={Ear} 
        />
          <Product 
        id="12345"
        title="Macbook Air -MacBook Air
        Power. It’s in the Air.
        Supercharged by the Apple M1 chip"
        price={899}
        rating={4}
        image={Mac} 
        />

       
        </div>
    <div className="home__row">
        <Product 
        id="12347"
        title="Careview Non-Woven Fabric Reuseable N95 Mask (White, Without Valve, Pack of 10) for Unisex"
        price={2}
        rating={3}
        image={Mask} 
        />

        <Product 
        id="12348"
        title="
        Hudson Canola Oil, Healthiest Cooking Oil, Indian Medical Association Recommended -1L (Pack of 2)"
        price={4}
        rating={4}
        image={Oil} 
        />
        <Product 
        id="12349"
        title="GHPC Men's Slim Fit Polo T-Shirt"
        price={5}
        rating={4}
        image={Tst} 
        />
       </div>
       <div className="home__row">
          <Product 
        id="123410"
        title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
        price={699}
        rating={4}
        image={Moni} 
        />

        
        </div>
       

        
        </div>
    )
}

export default Home
