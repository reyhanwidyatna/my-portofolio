import ipb from "../../assets/png/ipb.png"
import ui from "../../assets/png/ui.png"

export default function About() {
  return (
    <div id="about" className="about p-8 md:p-20">
      <div className="about-detail flex flex-col items-center">
        <p className="text-center text-white font-bold text-xl md:text-3xl mb-8 md:mb-16">
          About me
        </p>
        <p className="text-white text-sm md:text-lg text-justify mb-10 md:mb-16">
          Hi there, I’m Reyhan, a passionate software engineer with nearly 2 years of dedicated experience in frontend engineering.
          I thrive on exploring the various facets of software engineering, delving deep into different technologies, and continuously expanding my skill set.
          Beyond coding, I possess a curiosity that drives me to explore diverse roles, and I'm open to embracing new challenges,
          including delving into the realm of product management.
        </p>
        <p className="text-white text-base md:text-xl font-bold w-full mb-4 md:mb-8">Education</p>
        <div className="flex items-center text-white w-full mb-10 md:mb-16">
          <img
            className="about-education mr-4 md:mr-8"
            src={ipb}
            alt="education"
          />
          <div>
            <p className="font-semibold text-sm md:text-lg">Bogor Agricultural University</p>
            <p className="text-xs md:text-lg mb-4">
              Computer Science, Faculty of Mathematics and Natural Science
            </p>
            <div className="flex text-xs md:text-base mt-2">
              <span className="mr-4">GPK: 3.32</span>
              <span>2017 - 2021</span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-white w-full mb-10 md:mb-16">
          <img
            className="about-education mr-4 md:mr-8"
            src={ui}
            alt="education"
          />
          <div>
            <p className="font-semibold text-sm md:text-lg">University of Indonesia</p>
            <p className="text-xs md:text-lg mb-4">
              Information Technology, Faculty of Computer Science
            </p>
            <div className="flex text-xs md:text-base mt-2">
              {/* <span className="mr-4">GPK: 3.32</span> */}
              <span>2023 - present</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
