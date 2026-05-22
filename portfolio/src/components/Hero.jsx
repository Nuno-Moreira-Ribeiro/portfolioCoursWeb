/**
 * This is a Hero component
 * @param name
 * @param job
 * @returns {React.JSX.Element}
 * @constructor
 */
const Hero = ({name, job}) => {
    return (
        <section className="flex justify-between px-12 py-13 min-h-screen">
            <div className="flex flex-col max-w-md gap-3">
                <span className="font-nunito text-[19px] font-bold tracking-wider uppercase text-brand-yellow">
                    {job}
                </span>
                <div className="flex flex-col w-[33vw] gap-8">
                    <h1 className="font-poppins text-[64px] leading-[120%] font-bold tracking-normal text-brand-gray-black">
                        Hello, my <br /> name is <br />
                        <span className="text-brand-gray-black">{name}</span>
                    </h1>
                    <p className="font-nunito text-[24px] font-normal leading-[150%] tracking-normal text-brand-gray">
                        Short text with details about you, what you do or your
                        professional career. You can add more information on the about page.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a href="#projects" className="shadow-[0px_4px_10px_rgba(0,0,0,0.15)] font-roboto px-6 py-2 bg-brand-yellow text-black text-[18px] font-medium rounded-lg outline-none focus:outline-none">
                            Projects
                        </a>
                        <a href="#linkedin" className="shadow-[0px_4px_10px_rgba(0,0,0,0.15)] font-roboto px-6 py-2 text-black rounded-lg border-2 border-black text-[18px] font-medium outline-none focus:outline-none">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
);
}
export default Hero;