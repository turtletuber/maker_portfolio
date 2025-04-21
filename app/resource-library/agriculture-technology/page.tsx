import { ArrowLeftIcon } from "@/lib/icons";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";
import Image from "next/image";

const agTechLesson = {
  badge: "Curriculum",
  badgeColor: "bg-green-100 text-green-600",
  title: "Agriculture Technology",
  grades: "K-8",
  subjects: "Life Science, Computer Literacy, Career Literacy",
  duration: "Multi-week",
  description:
    "From seed to harvest, uncover the intricate cycles of plant life by becoming both scientist and gardener. You'll nurture plants from their first sprouts in both outdoor gardens and indoor growing spaces, tracking their journey through careful measurement and observation. As you monitor water needs, soil chemistry, and growing conditions, you'll learn to speak the language of plants through data - measuring pH levels, testing natural pest controls, and documenting the results of your experiments. The journey comes full circle as you harvest your own seeds, preparing to start the cycle anew.",
  slideImages: [
    { src: "/images/ag_tech.png", caption: "Testing and Growing", width: 400, height: 300 }
  ],
  learningObjectives: [
    "Track plant growth and cycles through observation and data collection.",
    "Test and monitor water, soil, and environmental conditions.",
    "Apply scientific methods to real-life gardening and agriculture."
  ],
  materials: [
    "Seeds, soil, growing containers",
    "pH test kits, water measurement tools",
    "Labels, markers, data sheets"
  ],
  standards: [
    "6.RP.A.3, 6.NS.B.3, 6.MP.1, 6.MP.4",
    "7.RPA.A.7, 7.EE.A.2, 7.EE.B.3, 7.SPA.1, 7.SPA.2, 7.MP.1",
    "8.SPA.1, 8.MP.1, 8.MP.2, 8.MP.6",
    "6.L2U1.13, 6.L2U1.14, 6.E2U1.10, 7.L1U1.8, 7.L1U1.9, 7.L2U1.12, 8.L3U1.9, 8.L4U1.11"
  ]
};

export default function AgricultureTechnologyDetails() {
  const project = agTechLesson;

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
