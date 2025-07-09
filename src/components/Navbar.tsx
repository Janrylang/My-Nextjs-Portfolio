

export default function Navbar() {
    return (
        <nav style={{ padding: "2em" }} className="bg-black text-white sticky top-0 z-50 px-8 py-6">
            <div className="flex uppercase justify-evenly text-2xl gap-x-200">
                <div>
                    <img src="/assets/logos/Thick-logo.png" alt="Logo" className="portfolio-logo h-10 w-10" />
                </div>

                <div className="font-[family-name:var(--font-geist-mono)]">
                    <ol className="flex gap-x-16">
                        <li> Home </li>
                        <li> About </li>
                        <li> Projects </li>
                        <li> Contact </li>
                    </ol>
                </div>
            </div>
        </nav>
    );
}
