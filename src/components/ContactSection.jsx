import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { useToast } from "../hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async  (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // const baseurl = window.location.protocol + '//' + window.location.hostname;
            const res = await fetch(`https://nile-crown-media-backend.vercel.app/api/home-contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                toast({
                    title: "Message Sent!",
                    description: "We'll get back to you as soon as possible.",
                });
            } else {
                toast({
                    title: "Something went wrong.",
                    description: `${data.errors[0].msg}`,
                });
            }
        } catch (error) {
            toast({
                title: "Something went wrong.",
                description: "An error occurred while sending the message.",
            });
            console.error(error);
        }
        setIsSubmitting(false);
        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        });

        // Simulate form submission
        /* setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "We'll get back to you as soon as possible.",
            });
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
            // setIsSubmitting(false);
        }, 400); */
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        Let's Build Something Amazing Together
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you're launching, rebranding, or ready to elevate your digital presence, we're here to make it happen.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3">
                        <Card className="h-full bg-gradient-to-br from-nile-blue to-nile-purple text-white overflow-hidden">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Mail className="mr-4 h-6 w-6 text-nile-cyan" />
                                        <div>
                                            <p className="font-medium mb-1">Email</p>
                                            <a href="mailto:hello@nilecrownmedia.com" className="text-white/80 hover:text-white">
                                                hello@nilecrownmedia.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone className="mr-4 h-6 w-6 text-nile-cyan" />
                                        <div>
                                            <p className="font-medium mb-1">Phone</p>
                                            <a href="tel:+440123456789" className="text-white/80 hover:text-white">
                                                +440123456789
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin className="mr-4 h-6 w-6 text-nile-cyan" />
                                        <div>
                                            <p className="font-medium mb-1">Address</p>
                                            <a href="https://maps.app.goo.gl/zg2XCeGc8wV2VsR7A">
                                                <address className="text-white/80 not-italic">
                                                    124 City Road<br />
                                                    London<br />
                                                    United Kingdom EC1V 2NX
                                                </address>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="mr-4 h-6 w-6 text-nile-cyan" />
                                        <div>
                                            <p className="font-medium mb-1">Business Hours</p>
                                            <p className="text-white/80">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday - Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h4 className="font-medium mb-4">Connect With Us</h4>
                                    <div className="flex space-x-4">
                                        {['/facebook2.png', '/twitter2.png', '/instagram2.png', '/linkedin2.png'].map((platform,index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                                            >
                                                <img className='w-6 h-6' src={platform} alt="contact info" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3">
                        <Card>
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold font-display mb-6">Send Us a Message</h3>

                                <form /* action={`https://formsubmit.co/8786b8119003c753a48551f3a9981007`} method='POST' */ onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium">
                                            Company / Organization
                                        </label>
                                        <Input
                                            id="company"
                                            name="company"
                                            placeholder="Your company name"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            className="h-4 w-4 rounded border-gray-300"
                                            required
                                        />
                                        <label htmlFor="privacy" className="text-sm text-gray-600">
                                            I agree to the <a href="#" className="text-nile-purple hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <input type="hidden" name="_subject" value="New submission from Nile Crown Media website!" />
                                    <input type="hidden" name="_captcha" value="true" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_next" value={`${window.location.protocol}//${window.location.host}/thanks`} />

                                    <div>
                                        <Button
                                            type="submit"
                                            className="bg-gradient-to-r from-nile-purple to-nile-cyan hover:shadow-lg transition-all w-full sm:w-auto"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
