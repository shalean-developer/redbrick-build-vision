import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  phone?: string;
}

const TeamMember = ({ name, role, phone }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Placeholder avatar */}
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-primary">
              {name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{role}</p>
          
          {phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                {phone}
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
