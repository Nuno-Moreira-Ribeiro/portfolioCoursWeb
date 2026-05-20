/**
 * This is a Hero component
 * @param name
 * @param job
 * @returns {React.JSX.Element}
 * @constructor
 */
const Hero = ({name, job}) => {
    return (
        <section className="flex justify-between px-12 py-16 min-h-screen">
            <div className="flex flex-col max-w-md">
                <span className="font-poppins text-sm font-semibold text-brand-yellow uppercase tracking-widest">
                    {job}
                </span>
                <h1 className="font-poppins text-6xl leading-[120%] font-bold text-brand-gray-black">
                    Hello, my <br /> name is <br />
                    <span className="text-brand-gray-black">{name}</span>
                </h1>
                <p className="font-nunito text-brand-gray text-base leading-relaxed">
                    Short text with details about you, what you do or your
                    professional career. You can add more information on the about page.
                </p>
                <div className="flex gap-4 mt-2">
                    <a href="#projects" className="font-roboto px-6 py-2 bg-brand-yellow text-black text-sm font-medium rounded">
                        Projects
                    </a>
                    <a href="#linkedin" className="font-roboto px-6 py-2 text-black rounded border border-black text-sm font-medium">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
);
}
export default Hero;