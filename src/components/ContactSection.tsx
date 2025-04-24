
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/sanyamsmehta@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Contact Me
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Get in touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out if you're looking for a product manager, a developer, 
              or just want to connect.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:sanyamsmehta@gmail.com" 
                className="flex items-center gap-3 text-foreground hover:text-gray-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>sanyamsmehta@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sanyammehta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-foreground hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/sanyammehta</span>
              </a>
              
              <a 
                href="https://github.com/sanyammehta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-foreground hover:text-gray-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/sanyammehta</span>
              </a>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Send me a message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <Input 
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <Input 
                  type="email"
                  id="email"
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                  className="w-full"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  {...register("message", { required: true })}
                  className="w-full"
                  rows={5}
                  placeholder="Your message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
