import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Divider from "./PageDivider/Divider";

const Hero = () => {
	return (
		<>
			<section id="hero" className="relative animate-fadeIn h-screen flex md:items-center md:justify-center px-4">
				<div className="text-xl md:text-2xl">
					<h1 className="text-4xl my-8 md:text-8xl">
						<h1 className="text-cyan-400">Hi there, I'm</h1>
						<Typewriter
							onInit={(typewriter) => {
								typewriter.pasteString("AJAYBALA").pauseFor(2000).changeDeleteSpeed(10).deleteChars(8).typeString("AJAYBALA").start();
							}}
						/>
					</h1>
					<div className="flex justify-evenly my-5 md:my-9 text-3xl md:text-4xl items-center">
						<a title="GitHub profile" href="https://github.com/AjaybalaC" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
							<AiOutlineGithub />
						</a>
						<a title="LinkedIn profile" href="https://www.linkedin.com/in/ajaybala-c" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
							<AiOutlineLinkedin />
						</a>
						<a className="text-cyan-400 text-3xl" href="./files/Resume.pdf" download>
							download resume
						</a>
					</div>
					<p>
						A Software developer and MERN Stack Developer
						<br /> Looking for my first job opportunity in the coding industry.
					</p>
					<p>Take a look at my projects and what I can offer below.</p>
				</div>
			</section>
			<Divider />
		</>
	);
};
export default Hero;
