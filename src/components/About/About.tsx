import ipb from "../../assets/png/ipb.png"

export default function About() {
  return (
    <div id="about" className="about p-8 md:p-20">
      <div className="about-detail flex flex-col items-center">
        <p className="text-center text-white font-bold text-xl md:text-3xl mb-8 md:mb-16">
          About me
        </p>
        <p className="text-white text-sm md:text-lg text-justify mb-10 md:mb-16">
          Hi there, I’m Reyhan and im a software engineer that currently focused on frontend
          engineering with almost 2 years experience. I also like to dive deep
          into and cover all areas of software engineering. I'm also curious
          and willing to try new things like product management. I was graduated from 
          IPB University in 2021. My hobbies are playing computer games and watching movies.
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
      </div>
    </div>
  )
}
