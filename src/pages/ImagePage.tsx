import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Image, Play, Paintbrush, Zap, PenTool } from "lucide-react";

const ImagePage = () => {
  const features = [
    {
      title: "Image generation",
      description: "Transform your ideas into images",
      icon: Image,
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    },
    {
      title: "Video generation",
      description: "Create stunning videos",
      icon: Play,
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    },
    {
      title: "Design tools",
      description: "Professional design tools",
      icon: Paintbrush,
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    },
    {
      title: "Realtime generation",
      description: "Generate in real-time",
      icon: Zap,
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    },
    {
      title: "Image editor",
      description: "Edit your images",
      icon: PenTool,
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    }
  ];

  const quickApps = [
    {
      title: "Advanced AI Poster Creator",
      description: "Quickly create stylish text posters",
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png",
      isNew: true
    },
    {
      title: "Explore Recraft AI Creation",
      description: "AI-Powered professional design magic",
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png",
      isNew: true
    },
    {
      title: "Old Photo Restoration",
      description: "Instantly restore damaged and faded old photos",
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    },
    {
      title: "Character Stickers",
      description: "Create cute and personalized character stickers",
      image: "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
    }
  ];

  const showcases = [
    "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png",
    "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png",
    "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png",
    "/lovable-uploads/ba821ae3-4fcf-4977-ba95-19e363657c2a.png"
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="relative h-48 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between p-8">
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-2">Single Payment,</h1>
            <p className="text-lg">Access 10+ AI Models for Images & Videos!</p>
            <Button variant="secondary" className="mt-4">
              Upgrade
            </Button>
          </div>
          <div className="flex gap-4">
            {/* Add your app icons here */}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-50 hover:bg-white transition-colors">
            <CardHeader className="space-y-1">
              <feature.icon className="w-6 h-6 text-purple-600" />
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={feature.image} alt={feature.title} className="rounded-md w-full h-32 object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Apps Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickApps.map((app, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="relative">
                  <img src={app.image} alt={app.title} className="rounded-md w-full h-48 object-cover" />
                  {app.isNew && (
                    <span className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-semibold mt-3">{app.title}</h3>
                <p className="text-sm text-gray-600">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Showcases Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Showcases</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {showcases.map((showcase, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-0">
                    <img src={showcase} alt={`Showcase ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ImagePage;