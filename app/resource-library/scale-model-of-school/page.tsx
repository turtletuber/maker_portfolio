import { ArrowLeftIcon, BookIcon, GraduationCapIcon, ClockIcon, CheckCircleIcon } from "@/lib/icons";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";

const scaleModelLesson = {
  badge: "Curriculum",
  badgeColor: "bg-green-100 text-green-600",
  title: "Scale Model of School",
  grades: "Grades 3-8",
  subjects: "Math, Engineering, Art",
  duration: "2-4 weeks",
  description: "Transform your school campus into a miniature masterpiece. This project-based lesson plan guides students through the process of measuring, scaling, and constructing a model of their school, integrating math, engineering, and creativity.",
  slideImages: [
    { src: "/images/scale-model/slide1.jpg", caption: "Introduction & Planning" },
    { src: "/images/scale-model/slide2.jpg", caption: "Measuring the School" },
    { src: "/images/scale-model/slide3.jpg", caption: "Building the Model" }
  ],
  learningObjectives: [
    "Apply measurement and scaling concepts to real-world objects.",
    "Collaborate in teams to plan and construct a 3D model.",
    "Present and explain design decisions."
  ],
  materials: [
    "Measuring tapes",
    "Cardboard, foam board, or similar materials",
    "Rulers, scissors, glue",
    "Markers, paint, decorations"
  ],
  standards: [
    "AZ.Math.Content.6.RP.A.1: Understand ratio concepts and use ratio reasoning to solve problems.",
    "AZ.Math.Content.7.G.A.1: Solve problems involving scale drawings of geometric figures.",
    "AZ.Math.Content.4.MD.A.1: Know relative sizes of measurement units within one system.",
    "AZ.ET.Tech.1: Use technology tools to gather, analyze, and represent data."
  ]
};

import Link from "next/link";

export default function ScaleModelProjectDetails() {
  const project = scaleModelLesson;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-0 md:ml-20">
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumb & Back Button */}
            <div className="mb-6">
              <Link href="/resource-library" className="text-primary hover:text-blue-700 inline-flex items-center">
                <ArrowLeftIcon className="mr-2 w-4 h-4" />
                Back to Resource Library
              </Link>
            </div>
            {/* Project Header */}
            <div className="mb-10">
              <div className={`inline-block px-3 py-1 mb-3 text-xs rounded-full ${project.badgeColor}`}>
                {project.badge}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                <span className="flex items-center">
                  <GraduationCapIcon className="mr-1 w-4 h-4" />
                  {project.grades}
                </span>
                <span className="flex items-center">
                  <BookIcon className="mr-1 w-4 h-4" />
                  {project.subjects}
                </span>
                <span className="flex items-center">
                  <ClockIcon className="mr-1 w-4 h-4" />
                  {project.duration}
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                {project.description}
              </p>
            </div>
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-6">Project Slides</h2>
                {/* Slide Gallery */}
                <div className="grid grid-cols-1 gap-6 mb-10">
                  {project.slideImages.map((slide, i) => (
                    <div key={i} className="overflow-hidden shadow-md rounded-xl bg-white">
                      <img
                        src={slide.src}
                        alt={slide.caption}
                        className="w-full object-contain max-h-[500px]"
                      />
                      <div className="p-4">
                        <p className="text-gray-700 font-medium">{slide.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                {/* Learning Objectives */}
                <div className="shadow-md mb-6 rounded-xl bg-white">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Learning Objectives</h3>
                    <ul className="space-y-3">
                      {project.learningObjectives.map((objective, i) => (
                        <li key={i} className="flex">
                          <CheckCircleIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Materials */}
                <div className="shadow-md mb-6 rounded-xl bg-white">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Materials Needed</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.materials.map((material, i) => (
                        <li key={i}>{material}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Standards */}
                <div className="shadow-md mb-6 rounded-xl bg-white">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Standards Alignment</h3>
                    <div className="space-y-3">
                      <p className="font-medium">Arizona Math Standards</p>
                      <p className="text-sm text-gray-600">{project.standards[0]}</p>
                      <p className="text-sm text-gray-600">{project.standards[1]}</p>
                      <p className="text-sm text-gray-600">{project.standards[2]}</p>
                      <p className="font-medium mt-4">Arizona Educational Technology Standards</p>
                      <p className="text-sm text-gray-600">{project.standards[3]}</p>
                    </div>
                  </div>
                </div>
                {/* Download Button */}
                <button className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 rounded-xl mb-6 transition">Download Full Lesson Plan</button>
                {/* Contact */}
                <div className="shadow-md rounded-xl bg-white">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Questions about this project?</h3>
                    <p className="text-gray-600 mb-4">
                      I'd be happy to answer any questions or provide additional resources for implementing this in your classroom.
                    </p>
                    <button className="w-full border border-primary text-primary font-semibold py-2 rounded-xl hover:bg-primary hover:text-white transition">
                      <a href="#contact">Contact Me</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
