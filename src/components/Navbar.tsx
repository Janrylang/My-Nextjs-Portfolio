

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="nav-content">
                <img src="/assets/logos/Thick-logo.png" alt="Logo" className="portfolio-logo" />

                <ol className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ol>
            </div>
        </nav>

    );
}
