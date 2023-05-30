import home from "../../assets/svg/home.svg"

export default function Home() {
  return (
    <div className="background px-8 md:px-28 my-10 md:my-24">
      <p className="text-3xl md:text-5xl font-bold">
        Reyhan Widyatna Harwenda
      </p>
      <p className="text-gray-600 text-base md:text-xl mt-4 md:mt-8">
        Frontend Engineer
      </p>
      <img className="background-image mt-24" src={home} alt="banner" />
    </div>
  )
}
