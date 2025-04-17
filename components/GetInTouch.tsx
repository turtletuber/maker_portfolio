export default function GetInTouch() {
    return (
        <section className="px-10 py-16 bg-blue-50">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4">Reach out to collaborate, connect, or ask a question.</p>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:mike.inbox.apply@gmail.com" className="text-blue-600 font-semibold hover:underline">
                        mike.inbox.apply@gmail.com
                    </a>
                </div>
                <div className="flex gap-4 text-blue-600 text-xl">
                    <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}