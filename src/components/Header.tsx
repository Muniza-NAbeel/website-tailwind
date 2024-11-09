import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-primary text-white">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="nav-logo">
                    <h2 className="text-2xl font-bold logo-text ">☕ Coffee</h2>
                </Link>
                
                <ul className="flex space-x-10">
                    <li className="nav-item">
                        <Link href="/" className="nav-link text-lg hover:text-secondary transition-colors">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/About" className="nav-link text-lg hover:text-secondary transition-colors">About</Link>
                    </li>  
                    <li className="nav-item">
                        <Link href="/Contact" className="nav-link text-lg hover:text-secondary transition-colors">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


