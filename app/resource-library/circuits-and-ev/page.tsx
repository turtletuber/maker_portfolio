import { ArrowLeftIcon, BookIcon, GraduationCapIcon, ClockIcon, CheckCircleIcon } from "@/lib/icons";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";

const circuitsEvLesson = {
  badge: "Curriculum",
  badgeColor: "bg-green-100 text-green-600",
  title: "Circuits and Electric Vehicles",
  grades: "K-8",
  subjects: "Art, Math, Science, Career Literacy",
  duration: "Multi-week",
  description:
    "Redesign and power up your own miniature electric vehicles. First, you'll craft custom car bodies, experimenting with different shapes and materials to transform basic RC cars. Then, you'll dive into electrical engineering by building a separate electric car from scratch - soldering wires to connect motors, batteries, and controls. Along the way, you'll explore how electric vehicles work and compare them to traditional combustion engines, gaining hands-on insight into the future of transportation technology.",
  slideImages: [
    { src: "/images/library/circuits-ev.jpg", caption: "Custom RC Car Soldering" },
    { src: "/images/library/circuits-ev.jpg", caption: "Student-built Electric Vehicle" },
    { src: "/images/library/circuits-ev.jpg", caption: "Solar Charging Station Model" }
  ],
  learningObjectives: [
    "Apply engineering and design thinking to create working electric vehicles.",
    "Understand and wire simple electrical circuits.",
    "Compare electric and combustion engine technologies."
  ],
  materials: [
    "RC car kits or basic chassis",
    "Motors, batteries, wires, soldering tools",
    "Cardboard, foam board, plastics for bodies",
    "Decorative materials, markers, paint"
  ],
  standards: [
    "6.NS.A.1, 6.NS.B.3, 6.NS.B.4, 6.MP.1",
    "7.G.A.1, 7.G.A.2, 7.G.A.3, 7.MP.1",
    "8.G.C.9, 8.MP.4, 8.MP.5",
    "6.P4U2.5, 7.P3U1.3, 7.P4U1.1, 8.P4U1.3, 8.P4U1.4, 8.P4U2.5, 8.P3U1.2"
  ]
};

export default function CircuitsEVProjectDetails() {
  const project = circuitsEvLesson;

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
            <img src={project.slideImages[1].src} alt={project.slideImages[1].caption} className="rounded-lg w-full h-auto mb-2" />
            <img src={project.slideImages[2].src} alt={project.slideImages[2].caption} className="rounded-lg w-full h-auto" />
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
