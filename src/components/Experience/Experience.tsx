import projects from "../../json/projects.json"
import works from "../../json/works.json"

export default function Experience() {
  return (
    <div id="experience" className="experience p-8 md:p-20">
      <div className="experience-detail flex-row md:flex justify-between">
        <div className="projects">
          <p className="font-semibold text-xl md:text-2xl">Projects</p>
          {projects.map((item, index) => (
            <div className="projects-detail" key={index}>
              <p className="projects-date font-bold text-sm md:text-base leading-4">
                {item.date}
              </p>
              <p className="font-semibold text-sm md:text-lg mt-2">{item.title}</p>
              <p className="text-gray-500 text-sm md:text-base mt-1 mb-3 leading-6 text-justify">
                {item.description}
              </p>
              <a className="projects-link text-sm md:text-md" href={item.visit} target="_blank" rel="noreferrer">Visit</a>
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
                <p className="font-semibold text-sm md:text-base mb-1">
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
  )
}
