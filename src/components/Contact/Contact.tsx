import logoInstagram from "../../assets/png/instagram.png"
import logoLinkedin from "../../assets/png/linkedin.png"
import logoGmail from "../../assets/png/gmail.png"

export default function Contact() {
  return (
    <div id="findme" className="findme p-8 md:p-20">
      <div className="findme-detail">
        <p className="text-base md:text-xl font-bold w-full mb-6 md:mb-8">Find Me</p>
        <div className="grid gap-8 md:gap-32 md:grid-cols-3 mb-4">
          <div className="findme-card">
            <div className="findme-card-inner flex justify-center items-center text-center text-sm md:text-base">
              <div className="findme-card-front flex flex-col justify-center items-center">
                <div className="findme-social-media mb-6">
                  <img src={logoLinkedin} alt="linkedin" />
                </div>
                <p className="text-base md:text-lg font-semibold">LinkedIn</p>
              </div>
              <div className="findme-card-back flex flex-col justify-center items-center text-center">
                <p className="mb-6 px-10">
                  Check me out on LinkedIn to see my portofolio and see what I've done professionally!
                </p>
                <a
                  className="findme-card-back-button py-1 px-4 font-semibold rounded"
                  href="https://www.linkedin.com/in/reyhan-widyatna-harwenda/"
                  target="_blank" rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="findme-card">
            <div className="findme-card-inner flex justify-center items-center text-center text-sm md:text-base">
              <div className="findme-card-front flex flex-col justify-center items-center">
                <div className="findme-social-media mb-6">
                  <img src={logoInstagram} alt="instagram" />
                </div>
                <p className="text-base md:text-lg font-semibold">Instagram</p>
              </div>
              <div className="findme-card-back flex flex-col justify-center items-center text-center">
                <p className="mb-6 px-10">
                  Check me out on Instagram to see what I do on a daily basis and what I do besides work!
                </p>
                <a
                  className="findme-card-back-button py-1 px-4 font-semibold rounded"
                  href="https://www.instagram.com/reyhannwh/"
                  target="_blank" rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="findme-card">
            <div className="findme-card-inner flex justify-center items-center text-center text-sm md:text-base">
              <div className="findme-card-front flex flex-col justify-center items-center">
                <div className="findme-social-media mb-6">
                  <img src={logoGmail} alt="gmail" />
                </div>
                <p className="text-base md:text-lg font-semibold">Gmail</p>
              </div>
              <div className="findme-card-back flex flex-col justify-center items-center text-center">
                <p className="mb-6 px-10">
                  Check me out on LinkedIn to see my portofolio and see what I've done professionally!
                </p>
                <a
                  className="findme-card-back-button py-1 px-4 font-semibold rounded"
                  href="mailto:harwendareyhan@gmail.com?subject=subject&cc=cc@example.com"
                  target="_blank" rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
