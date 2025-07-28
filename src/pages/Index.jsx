import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServiceSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
    useEffect(() => {
        // Update page title
        document.title = "Nile Crown Media | Home";

        // Scroll to top on page load
        window.scrollTo(0, 0);

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const href = this.getAttribute('href');
                if (!href) return;

                const target = document.querySelector(href);
                if (!target) return;

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main>
                <HeroSection />
                <ServicesSection />
                <PortfolioSection />
                <AboutSection />
                <BlogSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
