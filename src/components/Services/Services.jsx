import React from "react";
import Hero from "../Hero/Hero";
import AboutImag from "/src/assets/night.jpg";
import RecentTrips from "../RecentTrips/RecentTrips";
import img5 from "/src/assets/8.jpg";
import img6 from "/src/assets/9.jpg";
import img7 from "/src/assets/10.jpg";
import "../Home/Home.css"

function Services() {
  let text4 =
    "France is a dream destination known for its rich history, iconic landmarks, and charming cities. From the romantic streets of Paris to the beautiful countryside and stunning coastline, France offers unforgettable experiences for every traveler.";
  let text5 =
    "Indonesia is a tropical paradise made up of thousands of beautiful islands. With its pristine beaches, lush rainforests, vibrant culture, and breathtaking volcanoes, it is the perfect destination for adventure and relaxation.";
  let text6 =
    "Malaysia is a fascinating blend of modern cities, tropical islands, and rich cultural heritage. From the towering skyscrapers of Kuala Lumpur to the crystal-clear beaches and lush jungles, it offers something for every type of traveler.";
  return (
    <>
      <Hero
        image={AboutImag}
        cImg="AboutImg"
        title="Explore Our Travel Services"
        cName="hide"
      />
      <div  style={{ marginTop:'-80px' }}>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Recent Trips</h1>
      <p>You can discover unique destination using Google Map</p>
      <div
        className="trips"
      >
        <RecentTrips
          heading="Recent Trips"
          sHeading="You can discover unique destination using Google Map"
          Img={img5}
          para={text4}
          place="Trip in France"
        />
        <RecentTrips Img={img6} para={text5} place="Trip in Indonesia" />
        <RecentTrips Img={img7} para={text6} place="Trip in Malayisa" />
      </div>
      </div>
    </>
  );
}

export default Services;
