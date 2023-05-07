import React from "react";
import Header from "../component/Header";
import Carousel from "../component/Carousel";
import SectionOne from "../component/SectionOne";
import SectionTwo from "../component/SectionTwo";
import SectionThree from "../component/SectionThree";
import PanIndiaSection from "../component/PanIndiaSection";
import WhyPahalDesign from "../component/WhyPahalDesign";
import Testimonials from "../component/Testimonials";
import Activity1 from "../component/Activity";
import Work from "../component/Work";
import Top from "../component/Top";
import VideoTestimonials from "../component/VideoTestimonials";
import Magazine from "../component/Magazine";
import Footer from "../component/Footer";
import Last from "../component/Last";

export default function HomeScreen() {
  return (
    <div>
      <Header />
      <Carousel />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <PanIndiaSection />
      <WhyPahalDesign />
      <Testimonials />
      <Activity1 />
      <Work />
      <Top />
      <VideoTestimonials />
      <Magazine />
      <Footer />
      <Last />
    </div>
  );
}
