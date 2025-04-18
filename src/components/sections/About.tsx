const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Experienced Production Support Lead with 8+ years in Java development and application support,
            specializing in building and maintaining robust enterprise applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Image */}
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Me"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
            <p className="text-gray-700 mb-6">
              I am a Production Support Lead with extensive experience in Java, J2EE, Spring, and Spring Boot.
              My expertise includes monitoring tools like Splunk, AppDynamics, and Dynatrace, and working with
              application servers and cloud infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📘</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Experience</h4>
                  <p className="text-gray-700">8+ years in Production Support & Development</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📅</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Current Role</h4>
                  <p className="text-gray-700">Production Support Lead at Personica</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🧠</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Expertise</h4>
                  <p className="text-gray-700">Java, Spring, AWS, Microservices</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🛠️</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Tools</h4>
                  <p className="text-gray-700">Splunk, AppDynamics, Dynatrace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
