import home from "./assets/svg/home.svg"
import github from "./assets/svg/github.svg"
import linkedin from "./assets/svg/linkedin.svg"
import gmail from "./assets/svg/gmail.svg"

import ipb from "./assets/png/ipb.png"
import logoInstagram from "./assets/png/instagram.png"
import logoLinkedin from "./assets/png/linkedin.png"
import logoGmail from "./assets/png/gmail.png"

import projects from "./json/projects.json"
import works from "./json/works.json"
import navigation from "./json/navigation.json"


import "./App.css";

function App() {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <div className="main">
      <div id="home" className="body mx-auto py-6 md:py-8">
        <div className="navbar flex justify-center items-center rounded-3xl">
          <div className="shadow-md text-gray-600 text-sm font-semibold rounded-3xl py-2 px-8">
            {navigation.map((item, index) => (
              <span
                className="navbar-item text-sm md:text-lg cursor-pointer"
                onClick={() => handleClick(item.id)}
                key={index}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <div className="background px-8 md:px-28 my-10 md:my-24">
          <p className="text-3xl md:text-5xl font-bold">
            Reyhan Widyatna Harwenda
          </p>
          <p className="text-gray-600 text-md md:text-xl mt-4 md:mt-8">
            Frontend Engineer
          </p>
          <img className="background-image mt-24" src={home} alt="banner" />
        </div>
        <div id="experience" className="experience p-8 md:p-20">
          <div className="experience-detail flex-row md:flex justify-between">
            <div className="projects">
              <p className="font-semibold text-xl md:text-2xl">Projects</p>
              {projects.map((item, index) => (
                <div className="projects-detail" key={index}>
                  <p className="projects-date font-bold text-xs md:text-sm leading-4">
                    {item.date}
                  </p>
                  <p className="font-semibold text-sm md:text-md mt-2">{item.title}</p>
                  <p className="text-gray-500 text-sm md:text-md mt-2 mb-2 leading-6 text-justify">
                    {item.description}
                  </p>
                  <a className="projects-link text-sm md:text-md" href={item.visit} target="_blank" rel="noreferrer">{item.visit}</a>
                </div>
              ))}
            </div>
            <div className="works border rounded-lg h-fit mt-12 md:px-4 md:mt-0">
              <p className="font-semibold text-xl md:text-2xl">Work</p>
              {works.map((item, index) => (
                <div className="works-detail flex items-center" key={index}>
                  <div className="company mr-4 border flex justify-center items-center">
                    <img
                      className="company-image"
                      src={item.id}
                      alt={item.id}
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-semibold text-sm md:text-md mb-1">
                      {item.company}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-gray-500 text-xs md:text-sm mr-2">{item.title}</p>
                      <p className="text-gray-500 text-xs md:text-sm">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="download w-full rounded mt-6 py-1">
                <a
                  href="cv.pdf"
                  download="reyhan_widyatna_harwenda_CV.pdf"
                  target="_blank" rel="noreferrer"
                >
                  <p className="font-semibold text-sm py-2">Download CV</p>
                </a>
              </button>
            </div>
          </div>
        </div>
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
            <p className="text-white text-md md:text-xl font-bold w-full mb-4 md:mb-8">My Last Education</p>
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
                <div className="flex text-xs md:text-md mt-2">
                  <span className="mr-4">GPK: 3.32</span>
                  <span>2017 - 2021</span>
                </div>
              </div>
            </div>
            <p className="text-white text-md md:text-xl font-bold w-full mb-4 md:mb-8">Find Me On</p>
            <div className="grid gap-6 md:grid-cols-3 mb-4">
              <div className="flex flex-col justify-center items-center text-center text-sm md:text-md text-white py-4 px-2 md:py-10 md:px-8 border-4 border-white rounded">
                <div className="flex justify-center items-center about-social-media mb-6 md:mb-10">
                  <img src={logoLinkedin} alt="linkedin" />
                </div>
                <p className="mb-6">
                  Visit me on LinkedIn to find out what i've done in professional way!
                </p>
                <a
                  className="about-button py-1 px-4 font-semibold rounded"
                  href="https://www.linkedin.com/in/reyhan-widyatna-harwenda/"
                  target="_blank" rel="noreferrer"
                >
                  Visit
                </a>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-sm md:text-md text-white py-4 px-2 md:py-10 md:px-8 border-4 border-white rounded">
                <div className="flex justify-center items-center about-social-media mb-6 md:mb-10">
                  <img src={logoInstagram} alt="instagram" />
                </div>
                <p className="mb-6">
                  Check me out on Instagram to see what I do on a daily basis and what I do besides work!
                </p>
                <a
                  className="about-button py-1 px-4 font-semibold rounded"
                  href="https://www.instagram.com/reyhannwh/"
                  target="_blank" rel="noreferrer"
                >
                  Visit
                </a>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-sm md:text-md text-white py-4 px-2 md:py-10 md:px-8 border-4 border-white rounded">
                <div className="flex justify-center items-center about-social-media mb-6 md:mb-10">
                  <img src={logoGmail} alt="gmail" />
                </div>
                <p className="mb-6">
                  Feel free to email me if you'd like to just chat or offer an opportunity
                </p>
                <a
                  className="about-button py-1 px-4 font-semibold rounded"
                  href="mailto:harwendareyhan@gmail.com?subject=subject&cc=cc@example.com"
                  target="_blank" rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex justify-between items-center border-t pt-6 md:pt-8 px-8 md:px-28">
          <div className="flex text-sm md:text-lg text-gray-600 font-semibold">
            {navigation.map((item, index) => (
              <span
                className="navbar-item cursor-pointer"
                onClick={() => handleClick(item.id)}
                key={index}
              >
                {item.title}
              </span>
            ))}
          </div>
          <div className="footer-social-media md:flex items-center">
            <a
              className="mr-6"
              href="https://www.linkedin.com/in/reyhan-widyatna-harwenda/"
              target="blank"
            >
              <img className="social-media" src={linkedin} alt="linkedin" />
            </a>
            <a
              className="mr-6"
              href="https://github.com/reyhanwidyatna"
              target="blank"
            >
              <img className="social-media" src={github} alt="github" />
            </a>
            <a
              href="mailto:harwendareyhan@gmail.com?subject=subject&cc=cc@example.com"
              target="blank"
            >
              <img className="social-media-gmail" src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
