import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex items-center justify-between px-10 py-12">
            <div className="max-w-2xl">
                <h1 className="text-6xl font-black">Mike Amato</h1>
                <p className="text-xl mt-2 text-gray-600">STEM Educator | Engineer | Ed-Tech Consultant</p>
                <p className="mt-4 text-gray-600">Taking intimidating concepts and making them tactile, playful, and deeply human. Passionate about making engineering education fun, memorable, and inclusive for all learners.</p>

                <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-sm w-fit">
                    <div className="flex gap-8">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-blue-600">1,500+</p>
                            <p className="text-sm text-gray-500">Students Reached</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-blue-600">200+</p>
                            <p className="text-sm text-gray-500">STEM Kits Distributed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-blue-600">30+</p>
                            <p className="text-sm text-gray-500">Workshops Hosted</p>
                        </div>
                    </div>
                </div>

                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl">Get in Touch</button>
            </div>
            <Image src="/images/hero-action.png" alt="Mike teaching kids" className="rounded-xl w-1/2" width={600} height={600} />
        </section>
    );
}