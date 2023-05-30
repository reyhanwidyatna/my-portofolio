import github from "../../assets/svg/github.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import gmail from "../../assets/svg/gmail.svg"

export default function Footer() {

  return (
    <div className="footer flex justify-center md:justify-between items-center py-4 md:py-4 px-8 md:px-28">
      <div className="flex text-sm md:text-md text-gray-600">
        Copyright &copy; {new Date().getFullYear()}
        <span className="font-semibold mx-1"> Reyhan </span> |
        All Rights Reserved
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
  )
}
