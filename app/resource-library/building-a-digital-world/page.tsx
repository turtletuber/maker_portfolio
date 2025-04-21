import { ArrowLeftIcon } from "@/lib/icons";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";

const digitalWorldLesson = {
  badge: "Curriculum",
  badgeColor: "bg-green-100 text-green-600",
  title: "Building a Digital World",
  grades: "K-8",
  subjects: "Digital Art, STEM, Educational Technology, Career Literacy",
  duration: "Multi-week",
  description:
    "Design and build your own digital escape room where your classmates become the adventurers. Working in teams, you'll craft an interactive world filled with puzzles and challenges of your own creation. Using 3D modeling, digital art, and basic coding, you'll bring your ideas to life while learning core game design principles. Through playtesting and peer feedback, you'll refine your creative vision to ensure every player's journey through your digital world is both challenging and rewarding.",
  slideImages: [
    { src: "/images/digital_world.png", caption: "Student digital world project" }
  ],
  learningObjectives: [
    "Apply 3D modeling and digital art to create interactive worlds.",
    "Work in teams to design, code, and test digital escape rooms.",
    "Learn and apply core game design principles."
  ],
  materials: [
    "Computers with 3D modeling and coding software",
    "Game controllers or keyboards",
    "Art supplies for digital design"
  ],
  standards: [
    "6.NS.A.1, 6.G.A.1, 6.MP.4",
    "7.RPA.A.2, 7.EE.A.2, 7.G.A.1, 7.G.B.6, 7.MP.4",
    "8.G.A.2, 8.MP.1, 8.MP.4",
    "Empowered Learner, Knowledge Constructor, Innovative Designer, Creative Communicator, Global Collaborator",
    "6-8.1.a, 6-8.1.b, 6-8.3.a, 6-8.3.d, 6-8.4.a, 6-8.4.b, 6-8.4.c, 6-8.4.d, 6-8.6.a, 6-8.6.b, 6-8.6.c, 6-8.7.c"
  ]
};

export default function BuildingDigitalWorldDetails() {
  const project = digitalWorldLesson;

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
            <img src={project.slideImages[0].src} alt={project.slideImages[0].caption} className="rounded-lg w-full h-auto mb-2" />
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
