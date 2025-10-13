import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  WobbleCard 
} from "@/components/ui/wobble-card";
import { 
  BackgroundBeams 
} from "@/components/ui/background-beams";
import { 
  TextGenerateEffect 
} from "@/components/ui/text-generate-effect";
import { 
  ContainerScrollAnimation 
} from "@/components/ui/container-scroll-animation";
import { 
  FollowingPointer 
} from "@/components/ui/following-pointer";
import { 
  Palette, 
  Zap, 
  Shield, 
  Smartphone, 
  Code, 
  Sparkles,
  Github,
  Download,
  Star,
  ArrowRight,
  Layers,
  Eye,
  MousePointer
} from "lucide-react";

const SkelUI: React.FC = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Adaptive Theming",
      description: "Seamless dark mode with intelligent color adaptation and custom theme support.",
      gradient: "from-violet-500 to-pink-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with lazy loading and minimal bundle size for instant interactions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Accessibility First",
      description: "WCAG compliant components with keyboard navigation and screen reader support.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach with fluid layouts that adapt to any screen size.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Developer Friendly",
      description: "TypeScript support, comprehensive documentation, and intuitive APIs.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Modern Animations",
      description: "Smooth micro-interactions and engaging animations powered by Framer Motion.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const showcaseItems = [
    {
      title: "Interactive Cards",
      description: "Hover effects with 3D transforms and dynamic lighting",
      component: (
        <WobbleCard className="h-32 w-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg mx-auto mb-2" />
              <p className="text-sm font-medium">Hover me!</p>
            </div>
          </div>
        </WobbleCard>
      )
    },
    {
      title: "Text Animations",
      description: "Dynamic text generation with smooth character reveals",
      component: (
        <div className="h-32 w-full flex items-center justify-center bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-xl border border-violet-500/20">
          <TextGenerateEffect 
            words="SkelUI" 
            className="text-2xl font-bold"
            duration={1}
          />
        </div>
      )
    },
    {
      title: "Glassmorphism",
      description: "Frosted glass effects with backdrop blur and transparency",
      component: (
        <div className="h-32 w-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center">
          <div className="text-center">
            <Eye className="h-8 w-8 mx-auto mb-2 text-violet-500" />
            <p className="text-sm font-medium">Glass Effect</p>
          </div>
        </div>
      )
    },
    {
      title: "3D Interactions",
      description: "Perspective transforms that respond to mouse movement",
      component: (
        <div className="h-32 w-full perspective-1000">
          <motion.div 
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/20 h-full w-full flex items-center justify-center"
            whileHover={{ rotateX: 10, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="text-center">
              <MousePointer className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium">3D Tilt</p>
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <FollowingPointer>
      <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
        {/* Hero Section */}
        <BackgroundBeams className="min-h-screen">
          <div className="container mx-auto px-4 py-20">
            <motion.div
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Badge variant="outline" className="border-violet-500/50 text-violet-400 mb-4">
                <Star className="h-3 w-3 mr-1" />
                Next Generation UI Framework
              </Badge>
              
              <TextGenerateEffect 
                words="Build Stunning Interfaces" 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                duration={2}
              />
              
              <motion.p 
                className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                The perfect blend of Skeleton UI's solid foundation and Aceternity UI's cutting-edge animations.
                Create beautiful, accessible, and performant user interfaces with ease.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 px-8 py-3 text-lg"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </BackgroundBeams>

        {/* Features Section */}
        <section className="py-20 bg-neutral-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Everything you need to build modern, accessible, and beautiful user interfaces.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <WobbleCard>
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white mx-auto`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-neutral-400">{feature.description}</p>
                    </div>
                  </WobbleCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Interactive components that bring your interfaces to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {showcaseItems.map((item, index) => (
                <ContainerScrollAnimation
                  key={index}
                  direction="up"
                  speed="slow"
                >
                  <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Layers className="h-5 w-5 text-violet-500" />
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {item.component}
                    </CardContent>
                  </Card>
                </ContainerScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-neutral-400 mb-8">
                Join thousands of developers who are already using SkelUI to create stunning interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg"
                >
                  Start Building
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 px-8 py-3 text-lg"
                >
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </FollowingPointer>
  );
};

export default SkelUI;
