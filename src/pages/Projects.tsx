import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import housingImage from "@/assets/project-housing.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Housing", "Infrastructure", "Renovations", "Commercial"];

  const projects = [
    {
      title: "Modern Residential Development",
      location: "Gauteng Province",
      date: "December 2024",
      image: housingImage,
      category: "Housing",
    },
    {
      title: "Commercial Office Complex",
      location: "Western Cape",
      date: "November 2024",
      image: housingImage,
      category: "Commercial",
    },
    {
      title: "Infrastructure Upgrade Project",
      location: "KwaZulu-Natal",
      date: "October 2024",
      image: housingImage,
      category: "Infrastructure",
    },
    {
      title: "Luxury Home Renovation",
      location: "Western Cape",
      date: "September 2024",
      image: housingImage,
      category: "Renovations",
    },
    {
      title: "Affordable Housing Development",
      location: "Eastern Cape",
      date: "August 2024",
      image: housingImage,
      category: "Housing",
    },
    {
      title: "School Building Project",
      location: "Free State",
      date: "July 2024",
      image: housingImage,
      category: "Infrastructure",
    },
    {
      title: "Restaurant Renovation",
      location: "Gauteng Province",
      date: "June 2024",
      image: housingImage,
      category: "Commercial",
    },
    {
      title: "Community Center Construction",
      location: "KwaZulu-Natal",
      date: "May 2024",
      image: housingImage,
      category: "Infrastructure",
    },
    {
      title: "Residential Complex Extension",
      location: "Western Cape",
      date: "April 2024",
      image: housingImage,
      category: "Housing",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Our Projects"
        subtitle="Showcasing Excellence Across South Africa"
        height="medium"
      />

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="min-w-[120px]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-lg opacity-90">Provinces Covered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
