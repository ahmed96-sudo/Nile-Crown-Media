import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from '../components/ui/Card';
import { CircleCheck, ArrowRight } from 'lucide-react';

const Thanks = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <section className="relative bg-gradient-to-br from-nile-blue via-[#1a365d] to-[#1e3a8a] overflow-hidden md:pt-20 pt-16"></section>
            <section className="md:py-[100px] py-[70px] flex flex-col items-center px-[15px]">
                <CircleCheck className="h-[150px] w-[150px] text-[#3d9c3d]" />

                <div className="md:text-6xl font-semibold text-4xl text-gray-800 my-4 text-center">
                    Thank You!
                </div>

                <p className="md:text-lg text-base text-gray-500 my-2 text-center">
                    We've received your Message. We will get back to you as soon as possible.
                </p>
                <div className='flex flex-col md:gap-40 gap-10 md:flex-row md:justify-center mt-10'>
                    <Card className="text-center p-6 card-hover">
                        <CardContent className="pt-5">
                            <h4 className='font-bold mb-4 text-xl'>Connect With Us</h4>
                            <div className="flex space-x-4">
                                {['/facebook2.png', '/twitter2.png', '/instagram2.png', '/linkedin2.png'].map((platform,index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="bg-white/10 hover:bg-white/20 md:p-2 p-1 rounded-full transition-colors"
                                    >
                                        <img className='md:w-8 md:h-8 w-7 h-7' src={platform} alt="contact info" />
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 card-hover">
                        <CardContent className="pt-5 md:pt-12">
                            <Link to="/" reloadDocument>
                                <Button className="bg-nile-purple hover:bg-nile-purple/90">
                                    Return to Website <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Thanks;
