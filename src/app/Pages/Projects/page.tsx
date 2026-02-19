export default function Projects() {
  return (
    <div id="projects" className="mt-40 mb-80 px-4">
      <div className="text-white">
        {/* Title */}
        <div>
          <p className="text-2xl mb-20 sm:text-2xl md:text-3xl lg:text-4xl text-center">
            My Project(s)
          </p>
        </div>

        {/* Project Section */}
        <div>
          <p className="text-center mb-5 text-sm max-w-xl mx-auto leading-relaxed sm:text-base md:text-lg lg:text-2xl">
            Smart Campus <i className="text-amber-200">(For company use)</i>
          </p>

          {/* Container */}
          <div className="bg-[#1f1f1f] p-3 rounded-xl gap-5 flex flex-col lg:flex-row items-center justify-center">

            {/* Image */}
            <img
              src="/assets/Student-Login.png"
              alt="Smart Campus Project Screenshot"
              className="w-full max-w-md rounded-xl shadow-lg mx-5 mt-10 mb-3"
            />

            {/* Divider (only show on large screens) */}
            <div className="hidden lg:block h-72 w-px bg-gray-300"></div>

            {/* Description */}
            <div className="text-white text-left mx-5 lg:max-w-xl">
              Helped build and maintain a smart campus system for a maritime
              school using NuxtJs for front-end development. The system project
              includes features like student login, course management, and
              attendance tracking. The project itself has a lot of different
              modules such as Admission, E-Library, Registrar, Accounting,
              Inventory, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
