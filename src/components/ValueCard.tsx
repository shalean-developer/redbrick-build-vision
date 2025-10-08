import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ValueCard = ({ title, description, icon: Icon }: ValueCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted hover:bg-primary/5 transition-colors group">
      <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ValueCard;
