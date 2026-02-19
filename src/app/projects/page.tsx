import { Icon } from '@iconify/react'

export default function Projects() {
  return (
    <div id="projects" className="mt-40 mb-80 px-4">
      <div className="text-white">
        <p className="text-2xl mb-20 sm:text-2xl md:text-3xl lg:text-3xl text-center">
          My Project(s)
        </p>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">

          {/* Card 1 */}
          <div className="bg-[#1f1f1f] rounded-2xl p-5 w-80 flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl h-48">
              <img
                src="/assets/Student-Login.png"
                alt="Smart Campus Project Screenshot"
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-bold">
              Smart Campus <br /> <i className="text-amber-200 font-normal text-sm">(For company use)</i>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Helped build and maintain a smart campus system for a maritime
              school using NuxtJs for front-end development. The system includes
              features like student login, course management, and attendance
              tracking with modules such as Admission, E-Library, Registrar,
              Accounting, Inventory, etc.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:html-5" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:css-3" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:vue" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:nuxt-icon" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:vue" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:tailwindcss-icon" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:typescript-icon" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:pinia" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:laravel" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:php" /></span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1f1f1f] rounded-2xl p-5 w-80 flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl h-48">
              <img
                src="/assets/Blogs.png"
                alt="Project Screenshot"
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-bold">
              Travel Blog
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              This is a solo project built from scratch as a modern travel blog platform. The application allows users to upload and share photos of their travel destinations, creating a space where experiences and stories can be visually documented and explored.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:html-5" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:css-3" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:react" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:typescript-icon" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:redux" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:supabase-icon" /></span>
            </div>
          </div>

          <div className="bg-[#1f1f1f] rounded-2xl p-5 w-80 flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl h-48">
              <img
                src="/assets/POS.png"
                alt="Project Screenshot"
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-bold">
              Laundry POS System
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              A Laundry Point-of-Sale (POS) System designed to streamline daily shop operations such as order management, service tracking, and payment processing. The system helps laundry businesses efficiently manage customer transactions, monitor order status, and organize service records in a structured and user-friendly interface.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:html-5" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:css-3" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:vue" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:nuxt-icon" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:typescript-icon" /></span>
              <span className="bg-[#2e2e2e] text-white text-xs px-3 py-1.5 rounded-full"><Icon icon="logos:nuxt-icon" /></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}