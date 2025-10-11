import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqs = [
    {
      category: "Course Details",
      questions: [
        {
          q: "What is the duration of the course?",
          a: "Our comprehensive web development bootcamp runs for 6 months, including hands-on projects, live sessions, and placement preparation. The course is structured into modules covering frontend, backend, databases, and deployment."
        },
        {
          q: "What technologies will I learn?",
          a: "You'll master modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, Git, AWS, and more. We also cover industry best practices, testing, and deployment strategies."
        },
        {
          q: "Is the course suitable for beginners?",
          a: "Absolutely! We start from the fundamentals and gradually progress to advanced topics. Our curriculum is designed to take complete beginners to job-ready developers in 6 months."
        },
        {
          q: "What are the class timings?",
          a: "We offer flexible timings with both weekday and weekend batches. Weekday batches run Monday-Friday 6 PM - 9 PM, and weekend batches run Saturday-Sunday 10 AM - 5 PM."
        }
      ]
    },
    {
      category: "Placement & Career Support",
      questions: [
        {
          q: "Do you provide placement assistance?",
          a: "Yes! We have a dedicated placement cell with a 95% placement success rate. We partner with 200+ companies and provide resume building, mock interviews, and direct placement drives."
        },
        {
          q: "What is the average package after course completion?",
          a: "Our students receive average packages ranging from $50,000 to $90,000 annually. Top performers have received packages up to $120,000. Actual packages depend on skills, interview performance, and company."
        },
        {
          q: "How long does it take to get placed?",
          a: "Most students get placed within 1-3 months of course completion. We start placement preparation from month 4 of the course to ensure you're job-ready by graduation."
        },
        {
          q: "Do you offer career guidance?",
          a: "Yes, we provide one-on-one career counseling, portfolio review, LinkedIn profile optimization, and interview preparation throughout and after the course."
        }
      ]
    },
    {
      category: "Admission & Prerequisites",
      questions: [
        {
          q: "What are the prerequisites for joining?",
          a: "Basic computer knowledge and a passion for coding are all you need. No prior programming experience is required. We'll teach you everything from scratch."
        },
        {
          q: "What is the admission process?",
          a: "Fill out our online application form, attend a counseling session, complete a simple aptitude test, and if selected, pay the course fee to secure your seat."
        },
        {
          q: "What is the batch size?",
          a: "We maintain small batch sizes of 20-25 students to ensure personalized attention, regular doubt-clearing sessions, and effective mentorship."
        },
        {
          q: "Can I join mid-way through a batch?",
          a: "We generally recommend starting with a fresh batch for the best learning experience. However, if you have prior knowledge, we can assess and place you in an ongoing batch."
        }
      ]
    },
    {
      category: "Course Format & Learning",
      questions: [
        {
          q: "Is the course online or offline?",
          a: "We offer both online and hybrid modes. Online classes are live and interactive with screen sharing, coding sessions, and Q&A. Hybrid students can attend in-person or join online based on preference."
        },
        {
          q: "Will I get recorded sessions?",
          a: "Yes! All live sessions are recorded and made available to students for review. You'll have lifetime access to all course materials and recordings."
        },
        {
          q: "How are doubts resolved?",
          a: "We have daily doubt-clearing sessions, a dedicated Discord community for peer support, and direct mentor access via WhatsApp during working hours."
        },
        {
          q: "Are there any projects or assignments?",
          a: "Yes! You'll work on 15+ real-world projects including e-commerce sites, social media platforms, dashboards, and more. You'll also complete a capstone project for your portfolio."
        }
      ]
    },
    {
      category: "Fee & Payment",
      questions: [
        {
          q: "What is the course fee?",
          a: "The complete course fee is $3,500, which includes all learning materials, projects, placement support, and lifetime access to resources. We also offer EMI options."
        },
        {
          q: "Do you offer any scholarships or discounts?",
          a: "Yes! We offer merit-based scholarships up to 30%, early bird discounts, and referral benefits. Contact our admissions team for current offers."
        },
        {
          q: "What is your refund policy?",
          a: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week of the course, we'll provide a full refund, no questions asked."
        },
        {
          q: "Can I pay in installments?",
          a: "Yes, we offer flexible EMI options with 3, 6, or 12-month payment plans through our partner financial institutions."
        }
      ]
    },
    {
      category: "Post-Course Support",
      questions: [
        {
          q: "Do I get a certificate?",
          a: "Yes! You'll receive an industry-recognized certificate of completion that you can add to your LinkedIn profile and resume. Top performers also get special merit certificates."
        },
        {
          q: "What support do you provide after course completion?",
          a: "You'll get lifetime access to our learning platform, alumni network, job postings, advanced workshops, and community events. Plus, career support for up to 1 year."
        },
        {
          q: "Can I access course materials after completion?",
          a: "Absolutely! You'll have lifetime access to all course videos, materials, code repositories, and future course updates at no extra cost."
        },
        {
          q: "Is there an alumni network?",
          a: "Yes! Our 1,200+ alumni network is active on LinkedIn, Discord, and through regular meetups. It's great for networking, job referrals, and knowledge sharing."
        }
      ]
    }
  ];
  
  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about our courses and programs
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {/* FAQ Categories */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIdx) => (
              <div key={categoryIdx} className="bg-card rounded-lg shadow-card p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible>
                  {category.questions.map((faq, faqIdx) => (
                    <AccordionItem 
                      key={faqIdx} 
                      value={`item-${categoryIdx}-${faqIdx}`}
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-lg">
            <p className="text-xl text-muted-foreground">
              No FAQs found matching your search
            </p>
          </div>
        )}
        
        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our team is here to help!
          </p>
          <a href="/contact">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
