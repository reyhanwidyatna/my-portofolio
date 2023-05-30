import navigation from "../../json/navigation.json"

export default function Navbar() {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <>
      <div className="navbar flex justify-center items-center rounded-3xl">
        <div className="navbar-parent shadow-md text-gray-600 font-semibold rounded-3xl">
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
      </div>
    </>
  )
}
