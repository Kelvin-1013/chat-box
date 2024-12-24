import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <img src="/lovable-uploads/5e9fafbe-f172-4fa6-80d7-3e93dadaee3a.png" alt="Logo" className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Monica</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">Your AI Assistant for Everything</p>
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Chat</h3>
            <p className="text-gray-600">Have natural conversations with Monica</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Image Generation</h3>
            <p className="text-gray-600">Create stunning images with AI</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Video Creation</h3>
            <p className="text-gray-600">Transform your ideas into videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;