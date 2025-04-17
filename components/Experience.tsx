export default function Experience() {
    const experience = [
        {
            title: 'PBL & STEM Specialist',
            org: 'Phoenix El. School District #1',
            duration: 'Oct 2021 – Dec 2024',
            bullets: [
                'Designed and led project-based STEM courses for 350 students (grades 4–8), collaborating with industry experts to develop scalable hands-on STEM projects.',
                'Collaborated with school teachers and district executives to plan, budget, and expand project-based learning opportunities at Board Elementary.',
                'Organized quarterly STEM events reaching 400+ students and staff, boosting engagement and showcasing real-world STEM applications.'
            ]
        },
        {
            title: 'Ed-Tech Consultant',
            org: 'ElevateU',
            duration: 'Aug 2020 – Aug 2021',
            bullets: [
                'Partnered with university professors to develop, iterate, and launch digital course materials from existing literature, catering to hundreds of students.',
                'Collaborated with software engineering teams to prioritize feature development, reducing product launch time by 30%.',
                'Conducted user feedback sessions and data analyses, informing roadmap decisions aligned with professors needs, student feedback, and engineering constraints.'
            ]
        },
        {
            title: 'Teaching Assistant',
            org: 'Fulton Schools of Engineering, ASU',
            duration: 'Apr 2014 – May 2020',
            bullets: [
                'Facilitated semester-long, project-based learning for 80–120 interdisciplinary students, integrating programming principles, hands-on engineering activities, and venture development.',
                'Collaborated with faculty to refine course assignments, rubrics, grading, and learning modules; resulting in measurable increases in student satisfaction.',
                'Communicated across one-on-one interactions, public speaking, pitching, and leading workshops with groups ranging from 5 to 200 participants.'
            ]
        }
    ];

    return (
        <section className="px-10 py-16 bg-white">
            <h2 className="text-2xl font-bold mb-10">Experience</h2>
            <div className="space-y-16">
                {experience.map((job, idx) => (
                    <div key={idx} className="flex gap-8 items-start">
  <div className="w-1/3 min-w-[180px]">
    <p className="text-blue-600 font-medium text-sm">{job.duration}</p>
    <h3 className="text-lg font-bold text-gray-800 mt-1">{job.title}</h3>
    <p className="text-sm text-gray-500">{job.org}</p>
  </div>
  <div className="self-stretch w-px bg-gray-300 mx-4 opacity-80" />
  <ul className="flex-1 space-y-2 text-sm text-gray-700 pl-4">
    {job.bullets.map((bullet, bidx) => (
      <li key={bidx} className="flex items-start">
        <span className="text-blue-500 mt-1 mr-2">✔</span>
        <span>{bullet}</span>
      </li>
    ))}
  </ul>
</div>
                ))}
            </div>
        </section>
    );
}