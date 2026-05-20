export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-12 py-4">
            {}
            <div className="text-base font-comfortaa text-gray-800">
                Moreira Ribeiro Nuno
            </div>
            {}
            <ul className="flex gap-8 list-none m-0 p-0">
                <li><a href="#about"    className="text-gray-600 hover:text-yellow-500 transition-colors no-underline font-raleway">About</a></li>
                <li><a href="#projects" className="text-gray-600 hover:text-yellow-500 transition-colors no-underline">Projects</a></li>
                <li><a href="#contacts" className="text-gray-600 hover:text-yellow-500 transition-colors no-underline">Contacts</a></li>
            </ul>
        </nav>
    );
}