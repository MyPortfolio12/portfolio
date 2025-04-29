import React from 'react';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Vinod_Resume_JAVA%20-%20Prod_Support.pdf'; // <- URL encoded
    link.download = 'Vinod_Kumar_Aluru_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text */}
          <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600">Vinod Kumar Aluru</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Production Support Lead & Java Developer
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={downloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                📄 Download Resume
              </button>

              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold py-3 px-6 rounded-lg transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                📬 Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-600 bg-opacity-10 flex items-center justify-center">
              <div className="w-60 h-60 md:w-88 md:h-88 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/shot.jpg"
                  alt="Vinod Kumar Aluru"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
