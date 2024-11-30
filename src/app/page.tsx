import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
}
