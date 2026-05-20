/**
 *  This a navbar component
 * @param
 * @returns {React.JSX.Element}
 * @constructor
 */
 const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-12 py-4">
            <div className="text-base font-comfortaa text-brand-gray-black">
                Moreira Ribeiro Nuno
            </div>
            <ul className="flex gap-8 list-none m-0 p-0">
                <li><a href="#about"    className="text-brand-gray-black transition-colors no-underline font-raleway">About</a></li>
                <li><a href="#projects" className="text-brand-gray-black transition-colors no-underline font-raleway">Projects</a></li>
                <li><a href="#contacts" className="text-brand-gray-black transition-colors no-underline font-raleway">Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;