export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-7xl px-6 py-10 text-center">
                <p>
                    © {new Date().getFullYear()} AayatVerse.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}