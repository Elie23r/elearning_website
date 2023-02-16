import React from "react";
import Header from './Header';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import VisualElement from './VisualElement';
import Footer from "./Footer";

function HomePage(){
    return (
        <div>
            <Header />
            <HeroSection />
            <ContentSection />
            <Footer />
        </div>
    );
}

export default HomePage;