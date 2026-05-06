"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/assets";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Housing", "Infrastructure", "Renovations", "Commercial"];

  const projects = [
    {
      title: "Residential development finishes",
      location: "Cape Town metro",
      date: "December 2024",
      image: assets.projectHousing1,
      category: "Housing",
    },
    {
      title: "Commercial façade & envelope",
      location: "Western Cape",
      date: "November 2024",
      image: assets.projectCommercial1,
      category: "Commercial",
    },
    {
      title: "Driveway & hardstand paving",
      location: "Cape Town northern suburbs",
      date: "October 2024",
      image: assets.projectInfrastructure1,
      category: "Infrastructure",
    },
    {
      title: "Whole-home renovation programme",
      location: "Atlantic Seaboard corridor",
      date: "September 2024",
      image: assets.projectRenovation1,
      category: "Renovations",
    },
    {
      title: "Residential tiling & wet areas",
      location: "Southern suburbs",
      date: "August 2024",
      image: assets.projectHousing2,
      category: "Housing",
    },
    {
      title: "Structural shell & masonry close-in",
      location: "Cape Town metro",
      date: "July 2024",
      image: assets.projectInfrastructure2,
      category: "Infrastructure",
    },
    {
      title: "Commercial painting & coatings",
      location: "Cape Town CBD surrounds",
      date: "June 2024",
      image: assets.projectCommercial2,
      category: "Commercial",
    },
    {
      title: "Roof & slab waterproofing",
      location: "Western Cape",
      date: "May 2024",
      image: assets.projectInfrastructure3,
      category: "Infrastructure",
    },
    {
      title: "Decking & outdoor living upgrade",
      location: "Winelands corridor",
      date: "April 2024",
      image: assets.projectHousing3,
      category: "Housing",
    },
  ];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero title="Our Projects" subtitle="Showcasing Excellence Across the Cape Town Metro & Western Cape" height="medium" />

      <section className="py-20">
        <div className="container mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

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
}
