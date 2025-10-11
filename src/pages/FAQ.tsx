import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, BookOpen } from "lucide-react";
import { loadFAQs, initializeFAQs, faqCategories, FAQ } from "@/lib/faq-data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    initializeFAQs();
    setFaqs(loadFAQs());
  }, []);

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  // Filter FAQs based on search and category
  const filteredFaqs = Object.entries(groupedFaqs)
    .map(([category, questions]) => ({
      category,
      questions: questions.filter(
        faq =>
          (selectedCategory === "all" || category === selectedCategory) &&
          (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter(category => category.questions.length > 0);

  const totalFAQs = faqs.length;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Find answers to common questions about our No-Code/CMS Development course
          </p>
          <Badge variant="secondary" className="text-sm">
            {totalFAQs} Questions Available
          </Badge>

          {/* Search */}
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="WordPress Setup & Hosting">WordPress</TabsTrigger>
            <TabsTrigger value="Elementor Page Builder">Elementor</TabsTrigger>
            <TabsTrigger value="Divi Page Builder">Divi</TabsTrigger>
            <TabsTrigger value="WooCommerce & E-commerce">E-commerce</TabsTrigger>
            <TabsTrigger value="Course Information">Course</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-8">
                {filteredFaqs.map((category, categoryIdx) => (
                  <div key={categoryIdx} className="bg-card rounded-lg shadow-md border border-border p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-foreground">
                        {category.category}
                      </h2>
                      <Badge variant="outline">
                        {category.questions.length} {category.questions.length === 1 ? 'Question' : 'Questions'}
                      </Badge>
                    </div>

                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq) => (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="font-semibold pr-4">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                            <div
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                              className="prose prose-sm max-w-none dark:prose-invert"
                            />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-lg border border-border">
                <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-xl text-muted-foreground">
                  No FAQs found matching your search
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your search terms or browse all categories
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our team is here to help!
          </p>
          <a href="/contact">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
