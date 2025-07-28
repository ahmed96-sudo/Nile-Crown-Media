import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from "../hooks/use-toast";

const contactInfo = [
    {
        icon: <MapPin className="h-6 w-6 text-nile-purple" />,
        title: 'Visit Us',
        details: ['124 City Road', 'London, United Kingdom EC1V 2NX'],
        url: 'https://maps.app.goo.gl/zg2XCeGc8wV2VsR7A'
    },
    {
        icon: <Phone className="h-6 w-6 text-nile-purple" />,
        title: 'Call Us',
        details: ['+440123456789'/* , '+440123456789' */],
        url: 'tel:+440123456789'
    },
    {
        icon: <Mail className="h-6 w-6 text-nile-purple" />,
        title: 'Email Us',
        details: ['hello@nilecrownmedia.com'/* , 'support@nilecrownmedia.com' */],
        url: 'mailto:hello@nilecrownmedia.com'
    },
    {
        icon: <Clock className="h-6 w-6 text-nile-purple" />,
        title: 'Business Hours',
        details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
];

const Contact = () => {
    const { toast } = useToast();
        const [formData, setFormData] = useState({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            service: '',
            budget: '',
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
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            try {
                // const baseurl = window.location.protocol + '//' + window.location.hostname;
                const res = await fetch(`https://nile-crown-media-backend.vercel.app/api/contact-page`, {
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
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    service: '',
                    budget: '',
                    message: ''
                });

            // Simulate form submission
            /* setTimeout(() => {
                toast({
                    title: "Message Sent!",
                    description: "We'll get back to you as soon as possible.",
                });
                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    service: '',
                    budget: '',
                    message: ''
                });
                // setIsSubmitting(false);
            }, 400); */
        };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-nile-blue via-[#1a365d] to-[#1e3a8a] overflow-hidden pt-20">
                <div className="absolute top-20 right-10 w-72 h-72 bg-nile-purple/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-nile-cyan/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 py-20 z-10 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                            Get In <span className="text-nile-cyan">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="card-hover">
                            <CardHeader>
                                <CardTitle className="text-2xl font-display">Send us a message</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <form /* action={`https://formsubmit.co/8786b8119003c753a48551f3a9981007`} method='POST' */ onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" name="fname" required value={formData.fname} onChange={handleChange} placeholder="John" />
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" name="lname" required value={formData.lname} onChange={handleChange} placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="445551234567" />
                                    </div>

                                    <div>
                                        <Label htmlFor="service">Service Interested In</Label>
                                        <Select id="service" name="service" value={formData.service} onChange={handleChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                                <SelectItem value="web-dev">Web Development</SelectItem>
                                                <SelectItem value="ai-integration">AI Integration</SelectItem>
                                                <SelectItem value="digital-strategy">Digital Strategy</SelectItem>
                                                <SelectItem value="brand-identity">Brand Identity</SelectItem>
                                                <SelectItem value="growth-marketing">Growth Marketing</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="budget">Project Budget</Label>
                                        <Select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="100-5000">£100 - £5,000</SelectItem>
                                                <SelectItem value="5000-10000">£5,000 - £10,000</SelectItem>
                                                <SelectItem value="10000-25000">£10,000 - £25,000</SelectItem>
                                                <SelectItem value="25000-50000">£25,000 - £50,000</SelectItem>
                                                <SelectItem value="50000+">$50,000+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            className="min-h-[120px]"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className='flex items-center space-x-2'>
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

                                    <Button type="submit" className="w-full bg-nile-purple hover:bg-nile-purple/90 hover:scale-105" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-display mb-4">Let's Connect</h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mb-6"></div>
                                <p className="text-muted-foreground mb-8">
                                    We're here to help bring your vision to life. Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className="p-6 card-hover">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">{info.title}</h3>
                                                {info.details.map((detail, idx) => (
                                                    <a href={info.url} key={idx} className="text-muted-foreground text-sm">
                                                        {detail}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <Card className="overflow-hidden">
                                <div className="h-64 bg-gradient-to-br from-nile-purple/10 to-nile-cyan/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-12 w-12 text-nile-purple mx-auto mb-4" />
                                        <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="grid gap-6">
                            <Card className="p-6 card-hover">
                                <h3 className="font-semibold mb-2">How long does a typical project take?</h3>
                                <p className="text-muted-foreground">Project timelines vary based on scope, but most websites take 4-8 weeks from start to finish.</p>
                            </Card>
                            <Card className="p-6 card-hover">
                                <h3 className="font-semibold mb-2">Do you offer ongoing support?</h3>
                                <p className="text-muted-foreground">Yes, we provide ongoing maintenance and support packages to keep your website running smoothly.</p>
                            </Card>
                            <Card className="p-6 card-hover">
                                <h3 className="font-semibold mb-2">Can you work with existing brands?</h3>
                                <p className="text-muted-foreground">Absolutely! We can work with your existing brand guidelines or help refresh your brand identity.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;