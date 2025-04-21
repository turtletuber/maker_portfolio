import { ArrowLeftIcon } from "@/lib/icons";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";
import Image from "next/image";

const startupClubLesson = {
  badge: "Curriculum",
  badgeColor: "bg-green-100 text-green-600",
  title: "Startup Club",
  grades: "K-8",
  subjects: "Math, Educational Technology, Career Literacy",
  duration: "Multi-week",
  description:
    "Launch your own startup - twice. Experience entrepreneurship from two distinct angles as you create both a physical product business and a software company from the ground up. You'll think like a founder: researching real market needs, designing solutions, and building working prototypes. Along the way, you'll master the tools of modern business - from financial planning and marketing to coding and public speaking. By running two different types of companies, you'll discover firsthand how successful businesses solve real problems while developing your own entrepreneurial toolkit.",
  slideImages: [
    { src: "/images/startup_club.png", caption: "Startup Club activities", width: 400, height: 300 }
  ],
  learningObjectives: [
    "Research market needs and design solutions.",
    "Build working prototypes for both physical and digital products.",
    "Develop business, marketing, coding, and public speaking skills."
  ],
  materials: [
    "Prototyping materials (cardboard, electronics, etc.)",
    "Computers for software development",
    "Business planning templates"
  ],
  standards: [
    "Math Standards: (In Progress)",
    "Educational Technology Standards: (In Progress)"
  ]
};

export default function StartupClubDetails() {
  const project = startupClubLesson;

  return (
    <main className="flex min-h-screen flex-col md:flex-row bg-white">
      <Sidebar />
      <div className="flex-1 px-6 py-10 max-w-3xl mx-auto">
        <Link href="/resource-library" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeftIcon className="w-4 h-4 mr-1" /> Back to Library
        </Link>
        <span className={`inline-block text-xs px-2 py-1 rounded ${project.badgeColor} font-medium mb-2`}>{project.badge}</span>
        <h1 className="text-2xl font-bold mb-1">{project.title}</h1>
        <div className="text-sm text-gray-500 mb-4">{project.grades} &middot; {project.subjects} &middot; {project.duration}</div>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-shrink-0 w-full md:w-56">
            <Image src={project.slideImages[0].src} alt={project.slideImages[0].caption} width={600} height={350} className="rounded-lg w-full h-auto mb-2" />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-base text-gray-700">{project.description}</p>
            <h2 className="text-lg font-semibold mb-2">Learning Objectives</h2>
            <ul className="list-disc ml-5 mb-4 text-sm text-gray-700">
              {project.learningObjectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
            <h2 className="text-lg font-semibold mb-2">Materials</h2>
            <ul className="list-disc ml-5 mb-4 text-sm text-gray-700">
              {project.materials.map((mat, i) => (
                <li key={i}>{mat}</li>
              ))}
            </ul>
            <h2 className="text-lg font-semibold mb-2">Standards</h2>
            <ul className="list-disc ml-5 mb-4 text-sm text-gray-700">
              {project.standards.map((std, i) => (
                <li key={i}>{std}</li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
