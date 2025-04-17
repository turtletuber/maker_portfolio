// === components/Library.tsx ===
import Image from 'next/image';

const resources = [
    {
        title: 'Scale Model of School Math, Educational Technology, K-8 Career Literacy',
        date: 'Jul 14, 2023',
        time: '5 min read',
        type: 'Article',
        tagColor: 'bg-blue-100 text-blue-600',
        image: '/images/library/digital-age.jpg',
        description: 'How educators can design meaningful PBL experiences that leverage both physical making and digital tools.',
        link: 'Read Article',
    },
    {
        title: 'Bridging the Digital Divide in STEAM Education',
        date: 'May 22, 2023',
        time: '8 min read',
        type: 'Article',
        tagColor: 'bg-blue-100 text-blue-600',
        image: '/images/library/digital-divide.jpg',
        description: 'Strategies for creating equitable access to technology-rich learning experiences in underserved communities.',
        link: 'Read Article',
    },
    {
        title: '5 Hands-On Physics Demos for Middle School Classrooms',
        date: 'Jun 02, 2023',
        time: '12:45',
        type: 'Video',
        tagColor: 'bg-purple-100 text-purple-600',
        image: '/images/library/physics-demos.jpg',
        description: 'Simple, engaging demonstrations that make abstract physics concepts tangible for students.',
        link: 'Watch Video',
    },
    {
        title: 'Robotics Starter Kit',
        subtitle: 'Grades 3–5 · 6-Week Program',
        type: 'STEM Kit',
        tagColor: 'bg-blue-100 text-blue-600',
        description: 'Affordable, beginner-friendly robotics kit with curriculum for introducing elementary students to programming and robotics.',
        link: 'View Details',
    },
    {
        title: 'Virtual STEM Lab',
        subtitle: 'Middle School · Web-Based Platform',
        type: 'Digital Learning',
        tagColor: 'bg-orange-100 text-orange-600',
        description: 'Interactive online platform simulating hands-on STEM experiments for remote and hybrid learning environments.',
        link: 'View Details',
    },
    {
        title: 'Engineering Design Challenge',
        subtitle: 'Grades 9–12 · Community-Based',
        type: 'Curriculum',
        tagColor: 'bg-green-100 text-green-600',
        description: 'Multi-week design challenge where high school students develop solutions to real community problems through the engineering design process.',
        link: 'View Details',
    },
];

export default function Library() {
    return (
        <section className="px-10 py-20 bg-white">
            <h2 className="text-2xl font-bold mb-2">Resource Library</h2>
            <p className="text-gray-500 mb-10 max-w-xl">
                Access articles, video tutorials, downloadable materials, and other educational resources for STEAM learning.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {resources.map((item, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden shadow-sm bg-white border hover:shadow-lg transition-all duration-300">
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-5">
                            <span className={`text-xs px-2 py-1 rounded-md ${item.tagColor} font-medium`}>{item.type}</span>
                            <h3 className="text-md font-semibold mt-2 text-gray-900">{item.title}</h3>
                            {item.subtitle && <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>}
                            {!item.subtitle && (
                                <p className="text-xs text-gray-400 mt-1">
                                    {item.date} · {item.time}
                                </p>
                            )}
                            <p className="text-sm text-gray-600 mt-3">{item.description}</p>
                            <p className="mt-3 text-blue-600 text-sm font-medium hover:underline cursor-pointer">{item.link} →</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition">
                    Request Custom Curriculum
                </button>
            </div>
        </section>
    );
}