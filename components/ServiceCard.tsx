import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const ServiceCard = ({ title, description, icon: Icon, image }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-elevated transition-all duration-300">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
        <Link href="/services" className="flex-1">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
        <Link href="/contact" className="flex-1">
          <Button className="w-full">Request Quote</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
