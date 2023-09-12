import React from "react";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import ResponsiveServiceCard from "../components/ResponsiveServiceCard";

function HomeScreen() {
  return (
    <div>
      <Sidebar />
      <Banner />
      <ServiceCard />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default HomeScreen;
