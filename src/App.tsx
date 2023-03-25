import home from "./assets/home.svg"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import gmail from "./assets/gmail.svg"

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
      <div id="home" className="body mx-auto py-8">
        <div className="navbar flex justify-center items-center rounded-3xl">
          <div className="shadow-md text-gray-600 text-sm font-semibold rounded-3xl py-2 px-8">
            {navigation.map((item, index) => (
              <span
                className="navbar-item text-lg cursor-pointer"
                onClick={() => handleClick(item.id)}
                key={index}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <div className="background px-8 md:px-28 my-12 md:my-24">
          <p className="text-3xl md:text-5xl font-bold">
            Reyhan Widyatna Harwenda
          </p>
          <p className="text-gray-600 text-md md:text-xl mt-8">
            Hi there, I’m a software engineer currently focused on frontend
            engineering with almost 2 years experience. I also like to dive deep
            into and cover all areas of software engineering.
          </p>
          <img className="background-image mt-24" src={home} alt="banner" />
        </div>
        <div id="experience" className="experience p-12 md:p-20">
          <div className="experience-detail flex-row md:flex justify-between">
            <div className="projects">
              <span className="font-semibold">Projects</span>
              {projects.map((item, index) => (
                <div className="projects-detail" key={index}>
                  <p className="text-neutral-400 text-sm border-l-2 pl-3 leading-4">
                    {item.date}
                  </p>
                  <p className="font-semibold mt-2">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-2 leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="works border rounded-lg h-fit mt-12 p-6 md:mt-0">
              <span className="font-semibold">Work</span>
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
                    <span className="font-semibold text-sm">
                      {item.company}
                    </span>
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-500 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="download w-full rounded mt-6 py-1">
                <a
                  href={window.location.origin + "/cv.pdf"}
                  download="Reyhan CV"
                >
                  <p className="font-semibold text-sm py-2">Download CV</p>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="education" className="education mt-12 md:mt-20 px-8 md:px-28">
          <span className="flex text-green-600 font-bold text-lg mb-8">
            Education
          </span>
          <div className="flex items-center">
            <img
              className="education-image mr-6"
              src="ipb.png"
              alt="education"
            />
            <div>
              <p className="font-semibold">IPB University</p>
              <span className="text-gray-600 text-sm">
                Computer Science, Faculty of Mathematics and Natural Science
              </span>
              <div className="flex text-xs text-gray-400 mt-2">
                <span className="mr-4">GPK: 3.32</span>
                <span>2017 - 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex justify-between border-t mt-12 md:mt-16 pt-6 md:pt-10 px-8 md:px-28">
          <div className="flex text-sm text-gray-600 font-semibold">
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
          <div className="flex">
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
