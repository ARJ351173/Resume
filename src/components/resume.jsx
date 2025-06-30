import React from "react";

// Add print-specific styles
const printStyles = `
  @media print {
    @page {
      size: A4 portrait;
      margin: 0.4in;
    }
    
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    
    body {
      font-size: 11px !important;
      line-height: 1.3 !important;
      color: black !important;
      background: white !important;
    }
    
    .print\\:hidden {
      display: none !important;
    }
    
    .print\\:bg-white {
      background: white !important;
    }
    
    .print\\:py-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .print\\:px-4 {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
    
    .print\\:py-4 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    
    .print\\:space-y-4 > * + * {
      margin-top: 1rem !important;
    }
    
    .print\\:space-y-2 > * + * {
      margin-top: 0.5rem !important;
    }
    
    .print\\:mb-1 {
      margin-bottom: 0.25rem !important;
    }
    
    .print\\:mb-2 {
      margin-bottom: 0.5rem !important;
    }
    
    .print\\:text-sm {
      font-size: 0.875rem !important;
    }
    
    .print\\:text-xs {
      font-size: 0.75rem !important;
    }
    
    .print\\:shadow-none {
      box-shadow: none !important;
    }
    
    .print\\:rounded-none {
      border-radius: 0 !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = printStyles;
  document.head.appendChild(styleElement);
}

const skills = [
  { name: "HTML" },
  { name: "Tailwind CSS" },
  { name: "Java" },
  { name: "Git" },
  { name: "MySQL" },
  { name: "Javascript" },
  { name: "Swing" },
  { name: "Kotlin" },
  { name: "React" },
  { name: "Firebase" },
];

const languages = [
  { name: "Hindi" },
  { name: "French" },
  { name: "English" },
  { name: "Japanese" },
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
    <div className="min-h-screen bg-gray-100 py-12 flex justify-center print:bg-white print:py-0">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl mx-auto print:shadow-none print:rounded-none">
        {/* Top blue header */}
        <div className="bg-[#20416a] text-white px-8 py-6 rounded-t-lg print:rounded-none print:px-4 print:py-4">
          <h1 className="text-3xl font-bold print:text-2xl">Aryan Jain</h1>
          <div className="mt-2 text-sm font-medium print:text-xs">
            <a href="tel:8130501945" className="hover:underline">8130501945</a> | 
            <a href="mailto:AryanJain536@gmail.com" className="underline hover:no-underline">AryanJain536@gmail.com</a> | 
            <a href="https://www.linkedin.com/in/aryanj351173" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn</a> | 
            <a href="https://dosezen-702e6.web.app/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Dosezen</a>
          </div>
          <p className="mt-4 text-sm leading-5 font-normal print:text-xs print:mt-2">
            <b>Dynamic Front-End Developer Intern</b> with hands-on experience in web development and foundation in <b>HTML, CSS, JavaScript, and React</b>. Built and deployed a full-stack <b>Medical Reminder</b> Web App using <b>Firebase Hosting & Cloud Messaging</b>, enabling real-time push notifications to users across mobile and desktop platforms. Proven ability to enhance user experiences through responsive design and effective problem-solving.
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-6 print:px-4 print:py-4 print:space-y-4">
          {/* Skills */}
          <section>
            <h2 className="text-blue-900 text-lg font-bold mb-2 print:text-base print:mb-1">Skills</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 pl-4 text-sm list-disc print:text-xs">
              {skills.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </section>

          {/* Work History (Internships) */}
          <section>
            <h2 className="text-blue-900 text-lg font-bold mb-2 print:text-base print:mb-1">Work History</h2>
            <div className="space-y-4 print:space-y-2">
              <div>
                <div className="font-semibold text-sm print:text-xs">Front End Developer Intern</div>
                <div className="text-gray-700 text-xs mb-1 print:text-xs">Mainflow Main Flow Services and Technologies Pvt. Ltd, Ghaziabad | May 2024 – July 2024</div>
                <ul className="list-disc pl-4 text-xs print:text-xs">
                  <li>Developed responsive web applications using HTML, CSS, and JavaScript to enhance user experience.</li>
                  <li>Optimized front-end designs for improved functionality and visual appeal.</li>
                  <li>Collaborated with cross-functional teams to address code issues, increasing project efficiency.</li>
                  <li>Applied theoretical concepts effectively to practical tasks, boosting technical proficiency.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Front End Developer Intern</div>
                <div className="text-gray-700 text-xs mb-1 print:text-xs">Gudmed, Gurgaon | May 2025 – July 2025</div>
                <ul className="list-disc pl-4 text-xs print:text-xs">
                  <li>Built a responsive <b>medical reminder web application</b> using React.js for scheduling and tracking daily medicine intake.</li>
                  <li>Integrated <b>Firebase Authentication</b> and <b>Firebase Realtime Database</b> to manage user-specific medication schedules.</li>
                  <li>Implemented <b>real-time push notifications</b> using <b>Firebase Cloud Messaging (FCM)</b> to alert users about upcoming doses.</li>
                  <li>Configured <b>Firebase Hosting with GitHub Actions</b> for CI/CD deployment pipeline.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-blue-900 text-lg font-bold mb-2 print:text-base print:mb-1">Education</h2>
            <div className="space-y-2 print:space-y-1">
              <div>
                <div className="font-semibold text-sm print:text-xs">Bachelor of Computer Applications, Christ University</div>
                <div className="text-xs text-gray-500">GPA: 3.4/4.0 | April 2023 - Present</div>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Secondary Education, ST MARY'S SCHOOL</div>
                <div className="text-xs text-gray-500">March 2023</div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-blue-900 text-lg font-bold mb-2 print:text-base print:mb-1">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2">
              <div>
                <div className="font-semibold text-sm print:text-xs">Dosezen: Medical Reminder App</div>
                <ul className="list-disc pl-4 text-xs">
                  <li>React-based medical reminder platform</li>
                  <li>Firebase Authentication and Database</li>
                  <li>Cloud Messaging for notifications</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">BMI Calculator</div>
                <ul className="list-disc pl-4 text-xs">
                  <li>Vanilla JavaScript calculator</li>
                  <li>Metric and US units support</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">React To-Do List App</div>
                <ul className="list-disc pl-4 text-xs">
                  <li>Task manager with React</li>
                  <li>State management and CRUD operations</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Banking App (Java Swing)</div>
                <ul className="list-disc pl-4 text-xs">
                  <li>GUI banking system with MySQL</li>
                  <li>User registration and transactions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-blue-900 text-lg font-bold mb-2 print:text-base print:mb-1">Key Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 print:gap-1">
              <div>
                <div className="font-semibold text-sm print:text-xs">DCF and C Programming</div>
                <div className="text-xs text-gray-600">Christ University, 2023–2024</div>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Introduction to Python</div>
                <div className="text-xs text-gray-600">Infosys Springboard, Aug 2024</div>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Java Fundamentals</div>
                <div className="text-xs text-gray-600">Scaler Academy, Apr 2025</div>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Web Development Internship</div>
                <div className="text-xs text-gray-600">Main Flow Services, 2024</div>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Smart Agriculture using IoT</div>
                <div className="text-xs text-gray-600">Christ University, Apr 2024</div>
              </div>
              <div>
                <div className="font-semibold text-sm print:text-xs">Computer Network</div>
                <div className="text-xs text-gray-600">Huawei Talent, Jan 2025</div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-blue-900 text-lg font-bold mb-2 print:text-base print:mb-1">Languages</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 pl-4 text-sm list-disc print:text-xs">
              {languages.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* PDF Download Button */}
      <div className="fixed bottom-6 right-6 z-50 pdf-download-btn print:hidden">
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