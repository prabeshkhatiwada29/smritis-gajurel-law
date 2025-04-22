
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <div className="bg-law-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl">Get in touch with our legal team to discuss your needs</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-law-navy mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We will get back to you soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    required 
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-law-navy hover:bg-opacity-90 text-white w-full md:w-auto px-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-law-navy mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                We're here to help with your legal needs. Reach out through any of the following channels or visit our office during business hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-law-gold w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-law-navy">Office Address</h3>
                    <p className="text-gray-700">123 Legal Street, Kathmandu, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-law-gold w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-law-navy">Phone Number</h3>
                    <p className="text-gray-700">+977 1234 567890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-law-gold w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-law-navy">Email Address</h3>
                    <p className="text-gray-700">info@gajurellawfirm.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-law-gold w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-law-navy">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Placeholder */}
              <div className="mt-8 border border-gray-300 rounded-lg overflow-hidden h-[300px] bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  Google Maps Embed Placeholder<br />
                  (Replace with actual Google Maps embed code)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
