export default function Nonprofit() {
    return (
        <section className="px-10 py-20 bg-gradient-to-br from-green-400 via-blue-400 to-indigo-500 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Kids Should <span className="text-yellow-300">Make Things</span></h2>
            <p className="text-center max-w-3xl mx-auto text-lg mb-12">
                Our 501(c)(3) nonprofit provides project plans, materials, and support to kids to create in their homes, libraries, and community spaces. Everything they make, they keep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 rounded-xl p-6">
                    <p className="text-lg font-semibold mb-2">🔧 Our Mission</p>
                    <p className="text-sm">To provide hands-on STEM project opportunities to all children, regardless of background or resources. Everything they make, they keep.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                    <p className="text-lg font-semibold mb-2">🌱 Our Approach</p>
                    <p className="text-sm">Interest-driven learning where children personalize what they make within scaffolded project plans. Human and AI support help overcome challenges.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                    <p className="text-lg font-semibold mb-2">🧑‍🤝‍🧑 Our Community</p>
                    <p className="text-sm">We partner with urban neighborhood centers, local libraries, Native American tribal centers, and rural community organizations.</p>
                </div>
            </div>

            <p className="text-center">
                Learn more at{' '}
                <a
                    href="https://www.kids-should-make-things.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-yellow-200 hover:text-white transition"
                >
                    kids-should-make-things.org
                </a>
            </p>
        </section>
    );
}