import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  date: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, location, date, image, category }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>

        {/* Hover overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
