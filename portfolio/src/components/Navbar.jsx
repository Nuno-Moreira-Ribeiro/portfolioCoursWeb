/**
 *  This a navbar component
 * @param
 * @returns {React.JSX.Element}
 * @constructor
 */
 const Navbar = ({name}) => {
    return (
        <nav className="flex justify-between items-center px-12 py-3">
            <div className="font-comfortaa text-[18px] font-bold leading-[180%] tracking-normal text-brand-gray-black">
                {name}
            </div>
            <ul className="flex gap-12 list-none m-0 p-0">
                <li><a href="#about" className="text-brand-gray-black transition-colors no-underline font-medium text-[18px] font-raleway">About</a></li>
                <li><a href="#projects" className="text-brand-gray-black transition-colors no-underline font-medium text-[18px] font-raleway">Projects</a></li>
                <li><a href="#contacts" className="text-brand-gray-black transition-colors no-underline font-medium text-[18px] font-raleway">Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;