import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    description: ""
  });
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };
  
  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket Created!",
      description: "Your support ticket has been submitted. Ticket ID: #" + Math.floor(Math.random() * 10000),
    });
    setTicketForm({ name: "", email: "", subject: "", priority: "medium", description: "" });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            We're here to help! Reach out to us for any questions or support
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="hover:shadow-card-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                We'll respond within 24 hours
              </p>
              <a 
                href="mailto:info@skillmount.com" 
                className="text-primary hover:underline"
              >
                info@skillmount.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-card-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Mon-Fri from 9am to 6pm
              </p>
              <a 
                href="tel:+1234567890" 
                className="text-primary hover:underline"
              >
                +1 (234) 567-8900
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-card-hover transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Come say hello at our office
              </p>
              <address className="text-primary not-italic">
                123 Tech Street, Silicon Valley, CA 94000
              </address>
            </CardContent>
          </Card>
        </div>
        
        {/* Forms */}
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="contact">General Inquiry</TabsTrigger>
              <TabsTrigger value="ticket">Raise a Ticket</TabsTrigger>
            </TabsList>
            
            {/* Contact Form */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          placeholder="John Doe"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="john@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Ticket Form */}
            <TabsContent value="ticket">
              <Card>
                <CardHeader>
                  <CardTitle>Create a Support Ticket</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTicketSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ticket-name">Full Name *</Label>
                        <Input
                          id="ticket-name"
                          placeholder="John Doe"
                          value={ticketForm.name}
                          onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="ticket-email">Email *</Label>
                        <Input
                          id="ticket-email"
                          type="email"
                          placeholder="john@example.com"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ticket-subject">Subject *</Label>
                        <Input
                          id="ticket-subject"
                          placeholder="Brief description of the issue"
                          value={ticketForm.subject}
                          onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="ticket-priority">Priority</Label>
                        <select
                          id="ticket-priority"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                          value={ticketForm.priority}
                          onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ticket-description">Description *</Label>
                      <Textarea
                        id="ticket-description"
                        placeholder="Provide detailed information about your issue..."
                        rows={6}
                        value={ticketForm.description}
                        onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        We'll send you an email confirmation with your ticket ID. 
                        Our support team typically responds within 4-6 hours during business hours.
                      </p>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Submit Ticket
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our FAQ section for instant answers to common questions
          </p>
          <Button variant="outline" asChild>
            <a href="/faq">Visit FAQ</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
