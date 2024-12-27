import React from 'react'

const Project = () => {
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className=" text-4xl md:text-4xl font-bold mb-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-500">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src="../true.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">TrueDoc-ID</h3>
                <p className="text-gray-600 mb-4">
                TrueDoc ID is a cutting-edge document verification system that leverages AI and blockchain technology to ensure secure, efficient, and tamper-proof verification. Featuring NFC integration for seamless validation, TrueDoc ID offers multi-language support and a unified platform for streamlining the document verification process. Ideal for organizations and individuals, it reduces manual effort and enhances data integrity.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                 href="https://github.com/sidsince2003/TrueDoc-ID.git"
                 className="text-gray-600 hover:text-gray-800 font-medium" >
                    Source Code
                    </a>
                  
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
           
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src="../mock.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Mock.AI</h3>
                <p className="text-gray-600 mb-4">
                Mock.ai is an AI-powered platform designed to help users prepare for job interviews through tailored mock interview experiences. By registering with details about the desired job role, tech stack, and experience level, users engage in realistic, AI-driven mock interviews. The platform records responses via webcam and microphone, providing detailed feedback and ratings based on performance. This allows users to improve their interview skills and gain confidence before the real thing, making it an essential tool for job seekers in various fields.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://ai-interview-smoky.vercel.app/"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                 href="https://github.com/sidsince2003/ai-interview.git"
                 className="text-gray-600 hover:text-gray-800 font-medium" >
                    Source Code
                    </a>
                  
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src="../project3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Name</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of the project and the technologies used.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
