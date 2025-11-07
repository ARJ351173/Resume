import React from "react";

const printStyles = `
  @media print {
    @page {
      size: A4 portrait;
      margin: 0.5in;
    }
    body {
      font-size: 11px !important;
      color: #000 !important;
      line-height: 1.3 !important;
      background: white !important;
    }
    .print\\:hidden { display: none !important; }
    .print\\:shadow-none { box-shadow: none !important; }
    .print\\:rounded-none { border-radius: 0 !important; }
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement("style");
  styleElement.textContent = printStyles;
  document.head.appendChild(styleElement);
}

const skillCategories = {
  "Data Analytics": [
    "Python (Pandas, NumPy, Matplotlib)",
    "SQL",
    "Excel",
    "Power BI (basic)",
    "Tableau (basic)"
  ],
  "Technical Tools": [
    "MySQL",
    "Git",
    "HTML/CSS (basic)",
    "Problem Solving"
  ]
};

// ✅ Added proficiency levels
const languages = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
  { name: "Japanese", level: "Beginner" },
];

export default function Resume() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Aryan_Jain_Resume.pdf";
    link.download = "Aryan_Jain_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center print:bg-white print:py-0">
      <div className="bg-white w-full max-w-3xl shadow-md rounded-md p-5 text-gray-900 print:shadow-none print:rounded-none">
        
        {/* Header */}
        <header className="text-center mb-1.5">
          <h1 className="text-3xl font-bold text-gray-900">Aryan Jain</h1>
          <p className="text-sm mt-0.5">
            Christ University, Delhi NCR, India
          </p>
          <p className="text-xs text-gray-700 mt-0.5">
            <a href="tel:8130501945">8130501945</a> • 
            <a href="mailto:AryanJain536@gmail.com" className="mx-1 underline">AryanJain536@gmail.com</a> • 
            <a href="https://github.com/ARJ351173" className="underline" target="_blank" rel="noreferrer">Github</a> • 
            <a href="https://www.linkedin.com/in/aryanj351173" className="underline" target="_blank" rel="noreferrer">LinkedIn</a> • 
            <a href="https://dosezen.vercel.app/" className="underline" target="_blank" rel="noreferrer">Dosezen</a>
          </p>
        </header>

        <hr className="border-gray-400 my-1.5" />

        {/* Professional Summary */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Professional Summary</h2>
          <p className="text-[11px] text-gray-800 leading-tight">
            Technology graduate with a strong foundation in <b>Python, SQL, and Excel</b>, aiming to advance into data-focused analytical roles. Builds on front-end development experience to perform <b>data analysis, reporting, and visualization</b>, transforming insights into measurable business outcomes and efficiency improvements.
          </p>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* Skills */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Skills</h2>
          <div className="space-y-1">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <p className="font-semibold text-sm text-gray-800">{category}:</p>
                <p className="text-[11px] text-gray-700">{skills.join(' • ')}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* Work Experience */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Work Experience</h2>

          <div className="mt-0.5">
            <p className="font-semibold text-sm text-gray-900">
              Gudmed — Front-End Developer Intern
            </p>
            <p className="text-xs text-gray-600 mb-0.5">Gurgaon | May 2025 – July 2025</p>
            <ul className="list-disc pl-5 text-[11px] text-gray-700">
              <li>Built a medical reminder web app using React.js to record and visualize daily medicine intake for 100+ test users.</li>
              <li>Integrated Firebase Realtime Database to manage and analyze structured user medication data with zero-error synchronization.</li>
              <li>Designed UI components that improved load speed by 30% and delivered real-time notifications using FCM.</li>
              <li>Collaborated with a 4-member team to enhance engagement tracking and app reliability by ~20%.</li>
            </ul>
          </div>

          <div className="mt-1">
            <p className="font-semibold text-sm text-gray-900">
              Main Flow Services and Technologies Pvt. Ltd — Front-End Developer Intern
            </p>
            <p className="text-xs text-gray-600 mb-0.5">Ghaziabad | May 2024 – July 2024</p>
            <ul className="list-disc pl-5 text-[11px] text-gray-700">
              <li>Developed responsive web pages using HTML, CSS, and JavaScript, improving page load speed by ~20% and enhancing user interaction.</li>
              <li>Used debugging and testing tools (Chrome DevTools, Lighthouse) to analyze performance metrics, improving efficiency by 15%.</li>
              <li>Collaborated with a 5-member backend team to ensure seamless data integration and UI consistency.</li>
              <li>Strengthened reasoning and problem-solving skills through 3+ live project components.</li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* Education */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Education</h2>
          <p className="font-semibold text-sm text-gray-900">Christ University — Bachelor of Computer Applications</p>
          <p className="text-xs text-gray-600 mb-0.5">Bangalore | Apr 2023 – Present | GPA: 3.4/4.0</p>
          <p className="font-semibold text-sm text-gray-900 mt-1">St. Mary’s School — Secondary Education</p>
          <p className="text-xs text-gray-600">Mar 2023</p>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* Projects */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Projects</h2>

         <div className="mt-0.5">
  <p className="font-semibold text-sm text-gray-900">Retail Consumer Behavior Analysis</p>
  <ul className="list-disc pl-5 text-[11px] text-gray-700">
    <li>Executed a full-stack data analytics project combining <b>Python, SQL, and Power BI</b> to analyze customer shopping behavior for a retail company.</li>
    <li>Cleaned and transformed raw transactional data using Python (pandas, NumPy) for accurate analysis and modeling.</li>
    <li>Built relational database schemas in MySQL and executed analytical queries to uncover patterns in customer loyalty, sales channels, and purchase drivers.</li>
    <li>Developed an interactive <b>Power BI dashboard</b> visualizing sales trends, demographics, and payment preferences, enabling data-driven decision-making.</li>
    <li>Derived actionable insights and recommendations to optimize marketing strategies and improve customer retention.</li>
    <li>Published all scripts, SQL queries, and reports in a structured <b>GitHub repository</b> for transparent documentation.</li>
  </ul>
</div>

          <div className="mt-1">
            <p className="font-semibold text-sm text-gray-900">End-to-End SQL Analysis</p>
            <ul className="list-disc pl-5 text-[11px] text-gray-700">
              <li>Developed a 3-table relational database (~2,000 records) using SQL DDL/DML with proper keys and constraints.</li>
              <li>Cleaned and standardized data across 8+ columns ensuring consistency.</li>
              <li>Executed 25+ analytical queries using JOINs, CTEs, and window functions to derive key business insights.</li>
              <li>Created Excel/Power BI views, reducing manual reporting by ~30%.</li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* Certifications */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Certificates</h2>
          <ul className="list-disc pl-5 text-[11px] text-gray-700">
            <li>Data Analytics (Self-Learning, Ongoing) — Top Varsity</li>
            <li>Introduction to Python — Infosys Springboard, Aug 2024</li>
            <li>Web Development Internship — Main Flow Services, 2024</li>
            <li>Computer Network — Huawei Talent, Jan 2025</li>
            <li>SQL: Basic to Advanced Skills for Analysts & Engineers — Udemy, Oct 2025</li>
          </ul>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* Languages with proficiency */}
        <section>
          <h2 className="text-md font-bold uppercase mb-0.5 text-gray-900">Languages</h2>
          <p className="text-[11px] text-gray-700">
            {languages.map(({ name, level }) => `• ${name} (${level})`).join(' ')}
          </p>
        </section>
      </div>

      {/* PDF Download Button */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <button
          onClick={downloadPDF}
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full shadow-md font-semibold text-sm"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}