export default function Footer() {
    return (
        <footer className="px-10 py-6 bg-gray-800 text-gray-400 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Mike Amato. All rights reserved.</p>
        </footer>
    );
}