// === components/Library.tsx ===
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const resources = [
    {
        title: 'Scale Model of School',
        type: 'Curriculum',
        tagColor: 'bg-green-100 text-green-600',
        image: '/images/model_school.png',
        description: 'Transform your school campus into a miniature masterpiece.',
        link: 'View Details',
    },
    {
        title: 'Circuits and Electric Vehicles',
        type: 'Curriculum',
        tagColor: 'bg-green-100 text-green-600',
        image: '/images/circuits_ev.png',
        description: "Redesign and power up your own cardboard electric car.",
        link: '',
    },
    {
        title: 'Agriculture Technology',
        type: 'Curriculum',
        tagColor: 'bg-green-100 text-green-600',
        image: '/images/ag_tech.png',
        description: "Uncover the cycles of plant life by becoming a scientist and gardener.",
        link: '',
    },
    {
        title: 'Building a Digital World',
        type: 'Curriculum',
        tagColor: 'bg-green-100 text-green-600',
        image: '/images/digital_world.png',
        description: "Create interactive worlds with 3D modeling, digital art, and coding.",
        link: '',
    },
    {
        title: 'Startup Club',
        type: 'Curriculum',
        tagColor: 'bg-green-100 text-green-600',
        image: '/images/startup_club.png',
        description: "Creating both a physical product business and a software company.",
        link: '',
    },
    {
        title: 'Engaging course content',
        type: 'Video',
        tagColor: 'bg-red-100 text-red-600',
        image: '/images/what_innovation.png',
        description: 'Experimental learning content for the classroom.',
        link: 'https://www.youtube.com/watch?v=kyKTknZQ3KU',
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
                    <React.Fragment key={idx}>
                      {item.title === 'Maker Portfolio Overview' ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="rounded-xl overflow-hidden shadow-sm bg-white border hover:shadow-lg transition-all duration-300 flex flex-col h-96 cursor-pointer no-underline">
                          {item.image && (
                            <div className="flex-grow">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={350}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '3/2' }}
                              />
                            </div>
                          )}
                          <div className="px-4 pb-3 pt-2 max-w-full">
                            <span className={`inline-block text-[11px] px-2 py-[1px] rounded ${item.tagColor} font-medium mb-1 align-middle`}>{item.type}</span>
                            <h3 className="text-base font-semibold text-gray-900 leading-tight mb-0.5">{item.title}</h3>
                            {item.subtitle && <p className="text-[11px] text-gray-400 m-0">{item.subtitle}</p>}
                            <p className="text-xs text-gray-600 leading-snug m-0 mb-1">{item.description}</p>
                          </div>
                        </a>
                      ) : item.title === 'Scale Model of School' || item.title === 'Circuits and Electric Vehicles' || item.title === 'Agriculture Technology' ? (
                        <Link href={
                          item.title === 'Scale Model of School' ? "/resource-library/scale-model-of-school"
                          : item.title === 'Circuits and Electric Vehicles' ? "/resource-library/circuits-and-ev"
                          : "/resource-library/agriculture-technology"
                        } className="rounded-xl overflow-hidden shadow-sm bg-white border hover:shadow-lg transition-all duration-300 flex flex-col h-96 cursor-pointer no-underline">
                          {item.image && (
                            <div className="flex-grow">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={350}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '3/2' }}
                              />
                            </div>
                          )}
                          <div className="px-4 pb-3 pt-2 max-w-full">
                            <span className={`inline-block text-[11px] px-2 py-[1px] rounded ${item.tagColor} font-medium mb-1 align-middle`}>{item.type}</span>
                            <h3 className="text-base font-semibold text-gray-900 leading-tight mb-0.5">{item.title}</h3>
                            {item.subtitle && <p className="text-[11px] text-gray-400 m-0">{item.subtitle}</p>}
                            <p className="text-xs text-gray-600 leading-snug m-0 mb-1">{item.description}</p>
                          </div>
                        </Link>
                      ) : (
                        <div className="rounded-xl overflow-hidden shadow-sm bg-white border hover:shadow-lg transition-all duration-300 flex flex-col h-96">
                          {item.image && (
                            <div className="flex-grow">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={350}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '3/2' }}
                              />
                            </div>
                          )}
                          <div className="px-4 pb-3 pt-2 max-w-full">
                            <span className={`inline-block text-[11px] px-2 py-[1px] rounded ${item.tagColor} font-medium mb-1 align-middle`}>{item.type}</span>
                            <h3 className="text-base font-semibold text-gray-900 leading-tight mb-0.5">{item.title}</h3>
                            {item.subtitle && <p className="text-[11px] text-gray-400 m-0">{item.subtitle}</p>}
                            <p className="text-xs text-gray-600 leading-snug m-0 mb-1">{item.description}</p>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
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