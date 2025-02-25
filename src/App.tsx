import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Giuseppe Zangari
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5">
            Innovation | Artificial Intelligence | Digital Products | Executive MBA | Digital Transformation
          </p>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Executive in the digital and AI industry with extensive experience in leading innovation initiatives, driving digital transformation and translating strategic vision into execution. My career spans enterprise and startup environments, where I have successfully led high-impact initiatives, built digital products, built and scaled teams, and delivered measurable business value.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/gzangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn Profile
          </a>
          <a
            href="mailto:giuseppe@zangari.me"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </a>
        </div>

        <footer className="mt-20 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Giuseppe Zangari. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;