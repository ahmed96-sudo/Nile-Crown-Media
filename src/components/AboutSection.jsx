import { Check } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image column */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                                alt="Nile Crown Media Team"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        {/* <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br from-nile-purple/20 to-nile-cyan/20 rounded-lg -z-10"></div> */}

                        {/* Stats overlay */}
                        {/* <div className="absolute -top-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden lg:block">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-nile-blue mb-1">200+</span>
                                <span className="text-sm text-gray-600">Projects Completed</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Content column */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">About Nile Crown Media</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mb-6"></div>

                        <p className="text-lg text-gray-700 mb-6">
                            At Nile Crown Media, we don't just build, we innovate, elevate, and transform. Our team of visionary designers, developers, and strategists is driven by one mission: crafting exceptional digital experiences that leave an impact.
                        </p>

                        <p className="text-lg text-gray-700 mb-8">
                            Our approach blends technological innovation with human insight, allowing us to create websites and digital solutions that not only look beautiful but drive real business results for our clients.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                'AI-Powered Design',
                                'Strategic Thinking',
                                'Conversion Focused',
                                'Industry Experience',
                                'Dedicated Support',
                                'Future-Proof Solutions'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="mr-3 bg-nile-purple/10 rounded-full p-1">
                                        <Check className="h-4 w-4 text-nile-purple" />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-nile-blue">95%</span>
                                <span className="text-sm text-gray-600">Client Satisfaction</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-nile-blue">7+</span>
                                <span className="text-sm text-gray-600">Years Experience</span>
                            </div>
                            {/* <div className="flex flex-col">
                                <span className="text-3xl font-bold text-nile-blue">40+</span>
                                <span className="text-sm text-gray-600">Team Members</span>
                            </div> */}
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-nile-blue">200+</span>
                                <span className="text-sm text-gray-600">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                {/* <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">What Our Clients Say</h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Working with Nile Crown Media was a game-changer. Their branding and UX strategy gave our platform a completely new identity, and our user engagement doubled within weeks.",
                                author: "Sunny Mahmood",
                                role: "Managing Director, Royal Wharf Clinics"
                            },
                            {
                                quote: "Their team didn't just deliver a website, they delivered a growth engine. Thanks to Nile Crown Media, we saw a 3x boost in lead generation within the first month!",
                                author: "Dr. Giannina Warren",
                                role: "Co-Founder, Place Brand Academy"
                            },
                            {
                                quote: "From content to design to strategy, Nile Crown Media nailed every detail. Our website traffic increased by 70% after the new launch, and the feedback has been incredible.",
                                author: "Dr. Rosh Roddha",
                                role: "Medical Director and Founder, Roda Clinics"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

                                <div>
                                    <p className="font-semibold text-nile-blue">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default AboutSection;
