import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../header/navbar";
import HomeHeroImage from "/src/assets/12.jpg";
import Destination from "../Destination/Destination";
import img from "/src/assets/1.jpg";
import img2 from "/src/assets/ser.jpg";
import img3 from "/src/assets/8.jpg";
import img4 from "/src/assets/5.jpg";
// Image for recent Trips
import img5 from "/src/assets/3.jpg";
import img6 from "/src/assets/5.jpg";
import img7 from "/src/assets/6.jpg";
import "./Home.css"
import RecentTrips from "../RecentTrips/RecentTrips";
function Home() {
  let text1 =
    "Taal Volcano, Batangas is one of the Philippines' most iconic natural attractions, famous for its breathtaking scenery and unique volcanic landscape. Located in the middle of Taal Lake, it offers visitors stunning panoramic views, peaceful surroundings, and unforgettable experiences. Whether you're taking a boat ride across the lake, hiking nearby trails, or simply enjoying the beautiful scenery, Taal Volcano is a perfect destination for nature lovers, photographers, and adventure seekers. Its combination of natural beauty, rich history, and tranquil atmosphere makes it a must-visit destination for anyone exploring Batangas.";
  let text2 =
    "Mt. Daguldol, Batangas is a popular hiking destination known for its lush forests, scenic mountain trails, and breathtaking summit views. The trail is suitable for both beginners and experienced hikers, offering a rewarding adventure through nature. Along the way, visitors can enjoy fresh air, diverse wildlife, and beautiful landscapes before reaching the peak, where stunning views of the coastline and surrounding mountains await. Located near the beaches of Batangas, Mt. Daguldol is a perfect destination for those who want to combine outdoor adventure with a relaxing seaside escape.";
  let text4 =
    "France is a dream destination known for its rich history, iconic landmarks, and charming cities. From the romantic streets of Paris to the beautiful countryside and stunning coastline, France offers unforgettable experiences for every traveler.";
    let text5="Indonesia is a tropical paradise made up of thousands of beautiful islands. With its pristine beaches, lush rainforests, vibrant culture, and breathtaking volcanoes, it is the perfect destination for adventure and relaxation."
    let text6="Malaysia is a fascinating blend of modern cities, tropical islands, and rich cultural heritage. From the towering skyscrapers of Kuala Lumpur to the crystal-clear beaches and lush jungles, it offers something for every type of traveler."
  return (
    <>
      {/* <Navbar/> */}
      <Hero
        image={HomeHeroImage}
        cImg="HomeImg"
        title="Your Journey Starts Now"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        cName="anchor"
      />
      <Destination
        cName="left-main"
        title="Popular Destination"
        h2="Tours give the oppurtunity to see a lot"
        place="Taal Volcano,Batangas"
        text={text1}
        Img1={img}
        Img2={img2}
      />
      <Destination
        cName="right-main"
        place="Mt. Gaguldul, Batangas"
        text={text2}
        Img1={img3}
        Img2={img4}
      />
        <h1 style={{ textAlign:'center', marginTop:'50px' }}>Recent Trips</h1>
            <p>You can discover unique destination using Google Map</p>
      <div className="trips" >
      <RecentTrips
      heading="Recent Trips"
      sHeading="You can discover unique destination using Google Map"
      Img={img5}
      para={text4}
      place="Trip in France"
      />
      <RecentTrips
      Img={img6}
      para={text5}
      place="Trip in Indonesia"
      />
      <RecentTrips
      Img={img7}
      para={text6}
      place="Trip in Malayisa"
      />
      </div>
    </>
  );
}

export default Home;
