"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Bug,
  Lightbulb,
  Send,
  Clock,
  Users,
  Shield
} from "lucide-react";
import { useToast } from "@/components/ui/toast";

// Note: Since this is a client component, metadata should be handled at the parent level
// For now, we'll add it in a separate metadata file or handle it differently

const contactReasons = [
  {
    icon: Bug,
    title: "Report a Bug",
    description: "Found an issue with our calculators? Let us know so we can fix it quickly.",
    gradient: "bg-gradient-to-br from-red-400 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Feature Request",
    description: "Have an idea for a new calculator or feature? We'd love to hear it!",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    icon: HelpCircle,
    title: "General Support",
    description: "Need help using our tools or have questions about grade calculations?",
    gradient: "bg-gradient-to-br from-blue-400 to-indigo-500"
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Share your thoughts on how we can improve Grade Calculator.",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500"
  }
];

const faqItems = [
  {
    question: "How accurate are your grade calculators?",
    answer: "Our calculators are thoroughly tested and use standard mathematical formulas. However, always verify with your institution's specific grading policies as they may vary."
  },
  {
    question: "Do you store my grade information?",
    answer: "No, we don't store any of your grade data. All calculations happen locally in your browser for maximum privacy and security."
  },
  {
    question: "Can I suggest a new calculator feature?",
    answer: "Absolutely! We welcome feature requests and user feedback. Use the contact form below to share your ideas with us."
  },
  {
    question: "Is Grade Calculator really free?",
    answer: "Yes, all our tools are completely free to use and will always remain free. We believe quality educational tools should be accessible to everyone."
  }
];

export default function ContactUsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions, suggestions, or need help? We're here to assist you.
          Get in touch with our team and we'll respond as quickly as possible.
        </p>
      </div>

      {/* Contact Reasons */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need technical support, want to report a bug, or have ideas
            for new features, we're here to listen and help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contactReasons.map((reason) => (
            <Card key={reason.title} className="group relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 ${reason.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <reason.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Mail className="h-6 w-6" />
              Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="support">General Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Brief description of your message"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-vertical"
                  placeholder="Please provide as much detail as possible..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:opacity-90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Response Time Info */}
      <section className="bg-secondary/40 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What to Expect</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-2">
              <Clock className="h-8 w-8 mx-auto text-blue-500" />
              <h3 className="font-semibold">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days
              </p>
            </div>

            <div className="text-center space-y-2">
              <Users className="h-8 w-8 mx-auto text-green-500" />
              <h3 className="font-semibold">Personal Attention</h3>
              <p className="text-sm text-muted-foreground">
                Every message is read and responded to by our team personally
              </p>
            </div>

            <div className="text-center space-y-2">
              <Shield className="h-8 w-8 mx-auto text-purple-500" />
              <h3 className="font-semibold">Privacy Respected</h3>
              <p className="text-sm text-muted-foreground">
                Your contact information is kept private and secure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quick answers to common questions. Don't see what you're looking for?
            Feel free to contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground">
            While the contact form above is the fastest way to reach us, you can also:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="text-center">
              <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">support@gradecalculator.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}