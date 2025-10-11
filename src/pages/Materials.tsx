import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Code, Download, ExternalLink } from "lucide-react";

const Materials = () => {
  const [activeTab, setActiveTab] = useState("videos");
  
  // Mock data - replace with API calls
  const materials = {
    videos: [
      {
        id: 1,
        title: "Complete React.js Tutorial - Beginner to Advanced",
        description: "Comprehensive React course covering hooks, context, routing, and state management",
        url: "https://youtube.com/watch?v=example",
        duration: "8h 45m",
        category: "Frontend"
      },
      {
        id: 2,
        title: "Node.js & Express.js Full Course",
        description: "Build REST APIs and backend services with Node.js and Express",
        url: "https://youtube.com/watch?v=example",
        duration: "6h 30m",
        category: "Backend"
      },
      {
        id: 3,
        title: "MongoDB Database Masterclass",
        description: "Learn MongoDB from basics to advanced aggregation and indexing",
        url: "https://youtube.com/watch?v=example",
        duration: "5h 15m",
        category: "Database"
      },
      {
        id: 4,
        title: "Tailwind CSS - Complete Guide",
        description: "Master utility-first CSS with Tailwind, including responsive design",
        url: "https://youtube.com/watch?v=example",
        duration: "4h 20m",
        category: "Frontend"
      }
    ],
    documents: [
      {
        id: 1,
        title: "JavaScript ES6+ Cheat Sheet",
        description: "Quick reference guide for modern JavaScript features",
        type: "PDF",
        size: "2.5 MB",
        category: "Frontend"
      },
      {
        id: 2,
        title: "React Best Practices 2024",
        description: "Industry-standard patterns and practices for React development",
        type: "PDF",
        size: "3.8 MB",
        category: "Frontend"
      },
      {
        id: 3,
        title: "Git & GitHub Complete Guide",
        description: "Version control essentials with practical examples",
        type: "PDF",
        size: "4.2 MB",
        category: "Tools"
      },
      {
        id: 4,
        title: "REST API Design Principles",
        description: "Comprehensive guide to designing scalable REST APIs",
        type: "PDF",
        size: "2.9 MB",
        category: "Backend"
      }
    ],
    snippets: [
      {
        id: 1,
        title: "React Custom Hooks Library",
        description: "Collection of reusable React hooks for common use cases",
        language: "JavaScript",
        category: "Frontend"
      },
      {
        id: 2,
        title: "Express Middleware Examples",
        description: "Authentication, validation, and error handling middleware",
        language: "JavaScript",
        category: "Backend"
      },
      {
        id: 3,
        title: "Tailwind Component Library",
        description: "Pre-built responsive components using Tailwind CSS",
        language: "HTML/CSS",
        category: "Frontend"
      },
      {
        id: 4,
        title: "MongoDB Query Patterns",
        description: "Optimized query patterns for common scenarios",
        language: "JavaScript",
        category: "Database"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Learning Materials
          </h1>
          <p className="text-xl text-muted-foreground">
            Access our comprehensive library of resources to enhance your learning
          </p>
        </div>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="snippets" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Snippets
            </TabsTrigger>
          </TabsList>
          
          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {materials.videos.map((video) => (
                <Card key={video.id} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{video.title}</CardTitle>
                        <Badge variant="secondary" className="mb-2">
                          {video.category}
                        </Badge>
                      </div>
                      <Video className="w-8 h-8 text-muted-foreground flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Duration: {video.duration}
                      </span>
                      <Button size="sm" asChild>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          Watch
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {materials.documents.map((doc) => (
                <Card key={doc.id} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                        <div className="flex gap-2 mb-2">
                          <Badge variant="secondary">{doc.category}</Badge>
                          <Badge variant="outline">{doc.type}</Badge>
                        </div>
                      </div>
                      <FileText className="w-8 h-8 text-muted-foreground flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Size: {doc.size}
                      </span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Snippets Tab */}
          <TabsContent value="snippets" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {materials.snippets.map((snippet) => (
                <Card key={snippet.id} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{snippet.title}</CardTitle>
                        <div className="flex gap-2 mb-2">
                          <Badge variant="secondary">{snippet.category}</Badge>
                          <Badge variant="outline">{snippet.language}</Badge>
                        </div>
                      </div>
                      <Code className="w-8 h-8 text-muted-foreground flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{snippet.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        View Code
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Additional Resources Section */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need More Resources?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We regularly update our materials library with new content. 
            Check back often or contact us if you need specific resources.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Request Materials</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Materials;
