import React from 'react';
import AboutTop from "../components/about/AboutTop";
import '../components/about/AboutTop.scss';
import About from "../components/about/About";

export default function AboutPage() {
    return (
        <div>
            <AboutTop />
            <About />
        </div>
    )
}