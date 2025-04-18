const SkillCard = ({ icon, title, items }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-gray-100">
    <div className="w-14 h-14 text-2xl mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: "Programming",
      items: ["Java", "J2EE", "Spring", "Springboot", "Hibernate", "Multithreading"]
    },
    {
      icon: '🗄️',
      title: "Databases",
      items: ["MySQL", "DB2", "Oracle", "PL/SQL"]
    },
    {
      icon: '🖥️',
      title: "Servers",
      items: ["WebSphere", "WebLogic", "JBoss", "Tomcat"]
    },
    {
      icon: '☁️',
      title: "Cloud & Services",
      items: ["AWS", "REST APIs", "SOAP", "Microservices"]
    },
    {
      icon: '📊',
      title: "Monitoring",
      items: ["Splunk", "AppDynamics", "Dynatrace", "SiteScope"]
    },
    {
      icon: '🛠️',
      title: "Tools",
      items: ["Git", "Jenkins", "JIRA", "ServiceNow"]
    }
  ];

  const proficiencySkills = [
    { name: "Java/J2EE", percentage: 90 },
    { name: "Spring Framework", percentage: 85 },
    { name: "Production Support", percentage: 95 },
    { name: "Monitoring Tools", percentage: 90 },
    { name: "Database Management", percentage: 85 },
    { name: "Cloud Services", percentage: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive technical expertise in enterprise application development and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {proficiencySkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
