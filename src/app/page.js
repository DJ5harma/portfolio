import HeroSection from "@/components/HeroSection";
import InteractiveTechTree from "@/components/InteractiveTechTree";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigation />

			<main>
				{/* Hero Section */}
				<section id="home">
					<HeroSection />
				</section>

				{/* About Section */}
				<AboutSection />

				{/* Skills Section */}
				<section id="skills">
					<InteractiveTechTree />
				</section>

				{/* Projects Section */}
				<section id="projects">
					<ProjectShowcase />
				</section>

				{/* Experience Section */}
				<section id="experience">
					<ExperienceTimeline />
				</section>

				{/* Contact Section */}
				<section id="contact">
					<ContactSection />
				</section>
			</main>
		</div>
	);
}
