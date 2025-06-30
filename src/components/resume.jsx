import React from "react";

const skills = [
  { name: "HTML", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Java", level: 70 },
  { name: "Git", level: 65 },
  { name: "MySQL", level: 55 },
  { name: "Javascript", level: 62 },
  { name: "Swing", level: 50 },
  { name: "Kotlin", level: 40 },
  { name: "React", level: 45 },
];

const languages = [
  { name: "Hindi", level: 95 },
  { name: "French", level: 80 },
  { name: "English", level: 74 },
  { name: "Japanese", level: 66 },
];

export default function Resume() {
  // Function to download the PDF file from public folder
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Aryan_Jain_Resume.pdf';
    link.download = 'Aryan_Jain_Resume.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e3eaf6]">
      <div className="flex flex-col lg:flex-row font-serif text-[#222]">
      {/* Sidebar */}
      <aside className="w-full lg:w-[320px] bg-[#20416a] text-[#f4f7fa] flex flex-col px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 gap-8 sm:gap-10 shadow-2xl z-10 border-b lg:border-b-0 lg:border-r border-accent/20">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent flex items-center justify-center text-3xl sm:text-4xl font-bold text-sidebar shadow-lg mb-1 sm:mb-2">
            AJ
          </div>
          <h1 className="font-extrabold text-xl sm:text-[2.2rem] leading-6 mt-1 font-serif text-white tracking-tight drop-shadow">
            Aryan Jain
          </h1>
          <div className="text-accent text-xs tracking-widest font-bold mt-1 mb-1">
            FRONT END DEVELOPER
          </div>
        </div>
        <section>
          <h2 className="uppercase text-accent text-xs mb-2 font-bold tracking-wide">Details</h2>
          <div className="text-sm mb-1 font-semibold">8130501945</div>
          <div className="text-sm mb-1">
            <a className="underline hover:text-accent font-semibold" href="mailto:AryanJain536@gmail.com">
              AryanJain536@gmail.com
            </a>
          </div>
        </section>
        <section>
          <h2 className="uppercase text-accent text-xs mb-2 font-bold tracking-wide">Links</h2>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-xs font-semibold">LinkedIn</span>
              <a
                className="block underline text-accent text-xs hover:text-white font-semibold break-words"
                href="https://www.linkedin.com/in/aryanj351173"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/aryanj351173
              </a>
            </div>
            <div>
              <span className="text-xs font-semibold">Dosezen</span>
              <a
                className="block underline text-accent text-xs hover:text-white font-semibold break-words"
                href="https://dosezen-702e6.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                dosezen-702e6.web.app
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 className="uppercase text-accent text-xs mb-2 font-bold tracking-wide">Skills</h2>
          <div className="flex flex-col gap-2">
            {skills.map(({ name }) => (
              <div key={name}>
                <label className="text-xs font-semibold">{name}</label>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="uppercase text-accent text-xs mb-2 font-bold tracking-wide">Languages</h2>
          <div className="flex flex-col gap-2">
            {languages.map(({ name }) => (
              <div key={name}>
                <label className="text-xs font-semibold">{name}</label>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="uppercase text-accent text-xs mb-2 font-bold tracking-wide">Certifications</h2>
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-xs font-semibold">DCF and C Programming</div>
              <div className="text-xs text-accent">Christ University, 2023–2024</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Smart Agriculture using IoT</div>
              <div className="text-xs text-accent">Christ University, April 2024</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Introduction to Python</div>
              <div className="text-xs text-accent">Infosys Springboard, Aug 2024</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Web Development Internship</div>
              <div className="text-xs text-accent">Main Flow Services, May–July 2024</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Artificial Intelligence</div>
              <div className="text-xs text-accent">Christ University, 2024–2025</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Java Fundamentals</div>
              <div className="text-xs text-accent">Scaler Academy, April 2025</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Computer Network</div>
              <div className="text-xs text-accent">Huawei Talent, Jan 2025</div>
            </div>
            
            <div>
              <div className="text-xs font-semibold">Overview of IoT Technologies</div>
              <div className="text-xs text-accent">Huawei Talent, Jan 2025</div>
            </div>
          </div>
        </section>
      </aside>
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 bg-transparent overflow-y-auto flex flex-col gap-6 sm:gap-8">
        {/* Profile */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-2 border border-accent/30">
          <h2 className="text-lg sm:text-2xl font-bold font-serif mb-3 text-sidebar tracking-tight">Profile</h2>
          <p className="text-xs sm:text-sm leading-relaxed">
            <b>Dynamic Front-End Developer Intern</b> with hands-on experience
            in web development and foundation in <b>HTML, CSS, JavaScript, and
            React</b>. Built and deployed a full-stack <b>Medical Reminder</b>{" "}
            Web App using <b>Firebase Hosting & Cloud Messaging</b>, enabling
            real-time push notifications to users across mobile and desktop platforms.
            Proven ability to enhance user experiences through responsive design and
            effective problem-solving. Adept at working with cross-functional teams to
            optimize functionality and UI/UX. Quick to learn new technologies,
            committed to delivering high-quality, innovative digital solutions.
          </p>
        </section>
        <div className="border-t border-accent/30 my-2" />
        {/* Education */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-2 border border-accent/30">
          <h2 className="text-lg sm:text-2xl font-bold mb-3 text-sidebar tracking-tight">Education</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-base sm:text-lg">Bachelor of Computer Applications, Christ University</h3>
              <div className="text-sm text-gray-600 mb-1">GPA: 3.4/4.0</div>
              <div className="text-xs text-gray-500 mb-1">April 2023</div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Secondary Education, ST MARY'S SCHOOL</h3>
              <div className="text-xs text-gray-500 mb-1">March 2023</div>
            </div>
          </div>
        </section>
        <div className="border-t border-accent/30 my-2" />
        
        {/* Projects */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-2 border border-accent/30">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-sidebar tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">Dosezen: Medical Reminder App</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
                <li>React-based medical reminder platform</li>
                <li>Firebase Authentication and Database</li>
                <li>Cloud Messaging for notifications</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">BMI Calculator</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
                <li>Vanilla JavaScript calculator</li>
                <li>Metric and US units support</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">React To-Do List App</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
                <li>Task manager with React</li>
                <li>State management and CRUD operations</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">Image Gallery App</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
                <li>Responsive gallery with lightbox</li>
                <li>Category filtering and animations</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">Banking App (Java Swing)</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
                <li>GUI banking system with MySQL</li>
                <li>User registration and transactions</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">Calculator App (React)</h3>
              <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
                <li>React calculator with mathjs</li>
                <li>Keyboard support and operations</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="border-t border-accent/30 my-2" />
        
        {/* Internships */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-2 border border-accent/30">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-sidebar tracking-tight">Internships</h2>
          <div className="mb-8">
            <h3 className="font-bold text-base sm:text-lg mb-1">
              Front End Developer Intern,
              <span className="font-semibold text-sm sm:text-base block">
                Mainflow Main Flow Services and Technologies Pvt. Ltd, Ghaziabad
              </span>
            </h3>
            <div className="text-xs text-gray-500 mb-3">May 2024 – July 2025</div>
            <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
              <li>Developed responsive web applications using HTML, CSS, and JavaScript to enhance user experience.</li>
              <li>Optimized front-end designs for improved functionality and visual appeal.</li>
              <li>Utilized Visual Studio Code (VSCode) to streamline workflows and ensure timely project completion.</li>
              <li>Applied theoretical concepts effectively to practical tasks, boosting technical proficiency.</li>
              <li>Collaborated with cross-functional teams to address code issues, increasing project efficiency.</li>
              <li>Facilitated knowledge-sharing and troubleshooting sessions to support team members.</li>
              <li>Navigated technical challenges through targeted practice and problem-solving sessions.</li>
              <li>Expanded technical skills by engaging with diverse software tools.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-1">
              Front End Developer Intern,
              <span className="font-semibold text-sm sm:text-base block">
                Gudmed, Gurgaon
              </span>
            </h3>
            <div className="text-xs text-gray-500 mb-3">May 2025 – July 2025</div>
            <ul className="list-disc pl-5 sm:pl-6 text-xs sm:text-sm space-y-1">
              <li>
                Built a responsive <b>medical reminder web application</b> using React.js, tailored for users to schedule and track daily medicine intake.
              </li>
              <li>
                Integrated <b>Firebase Authentication</b> for secure login/signup and <b>Firebase Realtime Database</b> to manage user-specific medication schedules.
              </li>
              <li>
                Implemented <b>real-time push notifications</b> using <b>Firebase Cloud Messaging (FCM)</b> to alert users on mobile/desktop about upcoming doses based on personalized time schedules.
              </li>
              <li>
                Developed settings dashboard with <b>toggle controls</b> for enabling/disabling notifications (push, desktop, email), using React state management.
              </li>
              <li>
                Configured <b>Firebase Hosting with GitHub Actions</b> for CI/CD deployment pipeline and automated hosting of the web app.
              </li>
            </ul>
          </div>
        </section>
        <div className="border-t border-accent/30 my-2" />
        {/* Courses */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 border border-accent/30">
          <h2 className="text-lg sm:text-2xl font-bold mb-3 text-sidebar tracking-tight">Courses</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-base sm:text-lg">Introduction to Python - INFOSYS SPRINGBOOT, Infosys</h3>
              <div className="text-xs text-gray-500 mb-1">May 2024 – July 2025</div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Java course - mastering the fundamentals, Scaler</h3>
              <div className="text-xs text-gray-500 mb-1">August 2024 – September 2024</div>
            </div>
          </div>
        </section>
      </main>
      </div>
      
      {/* PDF Download Button */}
      <div className="fixed bottom-6 right-6 z-50 pdf-download-btn">
        <button
          onClick={downloadPDF}
          className="bg-[#20416a] hover:bg-[#1a3557] text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center gap-2 font-semibold"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Download PDF
        </button>
      </div>
    </div>
  );
}