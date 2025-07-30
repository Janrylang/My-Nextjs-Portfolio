


export default function Projects() {
  return (
    <div id="projects" className="mt-40 mb-80">
      <div className="text-white">
        <div>
          <p className="text-4xl mb-20 text-center"> My Project(s) </p>
        </div>

        <div>
          <p className="text-center mb-5 text-2xl max-w-xl mx-auto leading-relaxed">
            Smart Campus <i className="text-amber-200"> (For company use) </i>
          </p>

          <div className="bg-[#1f1f1f] mx-60 p-5 rounded-xl gap-8 flex items-center justify-center">
            <img
              src="/assets/Student-Login.png"
              alt="Smart Campus Project Screenshot"
              className="w-110 h-70 rounded-xl shadow-lg mx-5 mt-10 mb-10"
            />

            <div className="h-72 w-px bg-gray-300"></div>

            <div className="text-white text-left max-w-md mx-5">
              Helped build and maintain a smart campus system for a maritime school using NuxtJs for front-end development.
              The system project includes features like student login, course management, and attendance tracking. The project itself has a lot of different modules such as Admission, E-Library, Registrar, Accounting, Inventory, etc.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}