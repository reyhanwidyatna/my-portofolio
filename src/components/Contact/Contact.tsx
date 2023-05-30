import logoInstagram from "../../assets/png/instagram.png"
import logoLinkedin from "../../assets/png/linkedin.png"
import logoGmail from "../../assets/png/gmail.png"

export default function Contact() {
  return (
    <div id="findme" className="findme p-8 md:p-20">
      <div className="findme-detail">
        <p className="text-base md:text-xl font-bold w-full mb-6 md:mb-8">Find Me On</p>
        <div className="grid gap-8 md:gap-20 md:grid-cols-3 mb-4">
          <div className="flex flex-col justify-between items-center text-center text-sm md:text-base py-4 px-4 md:py-10 md:px-8 border-4 rounded">
            <div className="flex justify-center items-center findme-social-media mb-6 md:mb-10">
              <img src={logoLinkedin} alt="linkedin" />
            </div>
            <p className="mb-6">
              Check me out on LinkedIn to see my portofolio and see what I've done professionally!
            </p>
            <a
              className="findme-button py-1 px-4 font-semibold rounded"
              href="https://www.linkedin.com/in/reyhan-widyatna-harwenda/"
              target="_blank" rel="noreferrer"
            >
              Visit
            </a>
          </div>
          <div className="flex flex-col justify-between items-center text-center text-sm md:text-base py-4 px-4 md:py-10 md:px-8 border-4 rounded">
            <div className="flex justify-center items-center findme-social-media mb-6 md:mb-10">
              <img src={logoInstagram} alt="instagram" />
            </div>
            <p className="mb-6">
              Check me out on Instagram to see what I do on a daily basis and what I do besides work!
            </p>
            <a
              className="findme-button py-1 px-4 font-semibold rounded"
              href="https://www.instagram.com/reyhannwh/"
              target="_blank" rel="noreferrer"
            >
              Visit
            </a>
          </div>
          <div className="flex flex-col justify-between items-center text-center text-sm md:text-base py-4 px-4 md:py-10 md:px-8 border-4 rounded">
            <div className="flex justify-center items-center findme-social-media mb-6 md:mb-10">
              <img src={logoGmail} alt="gmail" />
            </div>
            <p className="mb-6">
              Feel free to email me if you'd like to just chat or offer an opportunity
            </p>
            <a
              className="findme-button py-1 px-4 font-semibold rounded"
              href="mailto:harwendareyhan@gmail.com?subject=subject&cc=cc@example.com"
              target="_blank" rel="noreferrer"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
