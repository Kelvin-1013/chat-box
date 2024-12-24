import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Image, Video, Compass, Notebook, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const AppSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: Image, label: "Image", path: "/image" },
    { icon: Video, label: "Video", path: "/video" },
    { icon: Compass, label: "Discover", path: "/discover" },
    { icon: Notebook, label: "Memo", path: "/memo" },
    { icon: MoreHorizontal, label: "More", path: "/more" },
  ];

  const hotItems = [
    {
      title: "AI Image Creator",
      description: "Create amazing images",
      path: "/image",
      isNew: true,
    },
    {
      title: "Video Generation",
      description: "Transform text to video",
      path: "/video",
      isNew: true,
    }
  ];

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 bg-white border-r h-screen p-4 fixed left-0 top-0 flex flex-col`}>
      <div className="flex items-center gap-2 mb-8">
        {!isCollapsed && (
          <>
            <img src="/lovable-uploads/5e9fafbe-f172-4fa6-80d7-3e93dadaee3a.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold">Monica</span>
          </>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={location.pathname === item.path ? "secondary" : "ghost"}
            className={`w-full justify-start ${isCollapsed ? 'px-2' : ''}`}
            asChild
          >
            <Link to={item.path}>
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-2">{item.label}</span>}
            </Link>
          </Button>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="mt-auto">
          <h3 className="text-sm font-semibold mb-2 text-gray-500">Hot Items</h3>
          <div className="space-y-2">
            {hotItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <Card className="hover:bg-gray-50 transition-colors">
                  <CardContent className="p-3">
                    <div className="flex items-start">
                      <div>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      {item.isNew && (
                        <span className="ml-auto bg-primary text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppSidebar;