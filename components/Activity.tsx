import Image from "next/image";

export default function Activity() {
    const projects = [
        {
            title: 'Perspectives on Generative AI in Learning',
            date: 'Apr 8, 2025',
            type: 'RESEARCH',
            image: '/images/research.png',
            description: 'New research paper exploring ethical boundaries and educational opportunities with AI tools in academic settings.',
            color: 'bg-amber-50',
            labelColor: 'text-orange-600'
        },
        {
            title: 'State Standards Aligned Lesson Plan Generator',
            date: 'Mar 22, 2025',
            type: 'DIGITAL',
            image: '/images/plangenerator.png',
            description: 'Interactive tool that helps educators create curriculum-aligned lesson plans with just a few clicks.',
            color: 'bg-blue-50',
            labelColor: 'text-blue-600'
        },
        {
            title: 'Design and Coding a Game for an Arcade Machine',
            date: 'Mar 15, 2025',
            type: 'CURRICULUM',
            image: '/images/arcade.png',
            description: 'Complete project-based lesson plan for teaching programming concepts through game design.',
            color: 'bg-green-50',
            labelColor: 'text-green-600'
        },
    ];

    return (
        <section className="px-6 py-12">
            <h2 className="text-2xl font-bold mb-8">Recent Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] ${project.color} w-full`}
                    >
                        <Image src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover rounded-t-lg shadow" width={400} height={300} />
<div className="px-3 pb-3 pt-2 text-[90%]">
  <div className="flex justify-between text-sm text-gray-500">
    <span className={`font-medium ${project.labelColor}`}>{project.type}</span>
    <span>{project.date}</span>
  </div>
  <p className="text-sm text-gray-600 mt-2">{project.description}</p>
  <button className="mt-4 text-sm text-blue-500 hover:underline">View Details</button>
</div>
                    </div>
                ))}
            </div>
        </section>
    );
}