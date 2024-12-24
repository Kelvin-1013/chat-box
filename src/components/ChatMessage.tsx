import { Avatar } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className="w-8 h-8">
        <img 
          src={isUser ? "/placeholder.svg" : "/lovable-uploads/5e9fafbe-f172-4fa6-80d7-3e93dadaee3a.png"} 
          alt={isUser ? "User" : "Assistant"} 
          className="w-full h-full object-cover"
        />
      </Avatar>
      <div 
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser 
            ? 'bg-primary text-white' 
            : 'bg-secondary text-secondary-foreground'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;