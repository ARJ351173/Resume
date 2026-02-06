import React from "react";

/* =========================
   PRINT STYLES (A4)
========================= */
const printStyles = `
  @media print {
    @page {
      size: A4 portrait;
      margin: 0.4in;
    }
    body {
      font-size: 10px !important;
      color: #000 !important;
      line-height: 1.2 !important;
      background: white !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .print\\:hidden { display: none !important; }
    .print\\:shadow-none { box-shadow: none !important; }
    .print\\:rounded-none { border-radius: 0 !important; }
    a { color: #000 !important; text-decoration: none !important; }
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = printStyles;
  document.head.appendChild(styleElement);
}

/* =========================
   DATA
========================= */
const skillCategories = {
  "Analytics & BI": [
    "Python (Pandas, NumPy, Matplotlib)",
    "SQL",
    "Excel (Pivot Tables, Lookups)",
    "Power BI (Dashboards, DAX basics)",
    "Tableau (basic)",
  ],
  Databases: ["MySQL", "SQLite"],
  "Tools & Development": ["Git/GitHub", "HTML/CSS (basic)", "JavaScript (basic)", "React (basic)"],
  Strengths: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Reporting", "Problem Solving"],
};

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
      <div className="bg-white w-full max-w-3xl shadow-md rounded-md p-4 text-gray-900 print:shadow-none print:rounded-none">
        {/* =========================
            HEADER
        ========================= */}
        <header className="text-center mb-1">
          <h1 className="text-2xl font-bold text-gray-900">Aryan Jain</h1>

          <p className="text-xs mt-0.5 text-gray-800">
            Christ University, Delhi NCR, India
          </p>

          <p className="text-[10px] text-gray-700 mt-0.5">
            <a href="tel:8130501945">+91 8130501945</a> •{" "}
            <a
              href="mailto:AryanJain536@gmail.com"
              className="mx-1 underline"
            >
              AryanJain536@gmail.com
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/ARJ351173"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            •{" "}
            <a
              href="https://www.linkedin.com/in/aryanj351173"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            •{" "}
            <a
              href="https://dosezen.vercel.app/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </p>
        </header>

        <hr className="border-gray-400 my-1" />

        {/* =========================
            PROFESSIONAL SUMMARY
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Professional Summary
          </h2>

          <p className="text-[10px] text-gray-800 leading-snug">
            Data Analytics-focused BCA graduate skilled in{" "}
            <b>Python, SQL, Excel, and Power BI</b>, with experience building
            dashboards, analytical reports, and structured datasets for
            decision-making. Strong foundation in{" "}
            <b>data cleaning, transformation, querying, and visualization</b>{" "}
            to uncover trends and deliver actionable insights. Combines
            technical development experience with analytical thinking to support
            business outcomes and operational efficiency.
          </p>
        </section>

        <hr className="border-gray-300 my-1" />

        {/* =========================
            SKILLS (ATS FRIENDLY)
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Skills
          </h2>

          <div className="text-[10px] text-gray-700 space-y-0">
            <p className="text-[9.5px] text-gray-700">
              <b>Analytics & BI:</b> {skillCategories["Analytics & BI"].join(" • ")}
            </p>
            <p>
              <b>Databases:</b> {skillCategories["Databases"].join(" • ")}
            </p>
            <p>
              <b>Tools & Development:</b>{" "}
              {skillCategories["Tools & Development"].join(" • ")}
            </p>
            <p>
              <b>Core Strengths:</b> {skillCategories["Strengths"].join(" • ")}
            </p>
          </div>
        </section>

        <hr className="border-gray-300 my-1" />

        {/* =========================
            WORK EXPERIENCE
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Work Experience
          </h2>

        {/* Sir Ganga Ram Hospital */}
<div className="mt-0.5">
  <p className="font-semibold text-xs text-gray-900">
    Sir Ganga Ram Hospital (SGRH) — Data Analytics Intern (CKD Analytics)
  </p>
  <p className="text-[10px] text-gray-600 mb-0.5">
    New Delhi | Jan 2026 – Present
  </p>

  <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0">
    <li>
      Cleaned and structured clinical datasets using <b>Python (Pandas/NumPy)</b> (<b>195 patients, 1,297 records</b>); computed KPIs showing <b>Creatinine 7.48→1.55 mg/dL</b>, <b>Hemoglobin 9.07→12.82 g/dL</b>.
    </li>
    <li>
      Conducted correlation and trend analyses identifying risk factors (<b>Age, BMI, follow-up frequency</b>) impacting post-transplant recovery.
    </li>
    <li>
      Built interactive dashboard (Chart.js + Tailwind) with trend charts and acceptance/rejection outcomes for clinical monitoring.
    </li>
  </ul>
</div>

          {/* Gudmed */}
          <div className="mt-0.5">
            <p className="font-semibold text-xs text-gray-900">
              Gudmed — Front-End Developer Intern
            </p>
            <p className="text-[10px] text-gray-600 mb-0.5">
              Gurgaon | May 2025 – July 2025
            </p>

            <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0">
              <li>
                Built medical reminder web app using <b>React.js</b> with structured tracking for <b>100+ test users</b>; integrated <b>Firebase Realtime Database</b> for data synchronization.
              </li>
              <li>
                Optimized UI rendering and component structure, reducing load time by <b>~30%</b> using web performance tools.
              </li>
              <li>
                Collaborated with 4-member team to implement engagement tracking, improving feature adoption by <b>~20%</b>.
              </li>
            </ul>
          </div>

          {/* Main Flow */}
          <div className="mt-0.5">
            <p className="font-semibold text-xs text-gray-900">
              Main Flow Services and Technologies Pvt. Ltd — Front-End Developer Intern
            </p>
            <p className="text-[10px] text-gray-600 mb-0.5">
              Ghaziabad | May 2024 – July 2024
            </p>

            <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0">
              <li>
                Developed responsive web pages using <b>HTML, CSS, JavaScript</b>, improving UX and load speed by <b>~20%</b>.
              </li>
              <li>
                Analyzed performance metrics using <b>Chrome DevTools and Lighthouse</b>, contributing to <b>~15%</b> efficiency improvements.
              </li>
              <li>
                Delivered <b>3+ live project components</b> in production with clean backend integration across modules.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-300 my-1" />

        {/* =========================
            EDUCATION
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Education
          </h2>

          <div className="mt-0.5">
            <p className="font-semibold text-xs text-gray-900">
              Christ University — Bachelor of Computer Applications (BCA)
            </p>
            <p className="text-[10px] text-gray-600">
              Delhi NCR | Apr 2023 – Present | GPA: 3.4/4.0
            </p>
          </div>

          <div className="mt-0.5">
            <p className="font-semibold text-xs text-gray-900">
              St. Mary's School — Secondary Education
            </p>
            <p className="text-[10px] text-gray-600">Mar 2023</p>
          </div>
        </section>

        <hr className="border-gray-300 my-1" />

       {/* =========================
    PROJECTS
========================= */}
<section>
  <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
    Projects
  </h2>

  {/* Project 1 */}
  <div className="mt-0.5">
    <div className="flex items-center justify-between gap-2">
      <p className="font-semibold text-xs text-gray-900">
        PhonePe Transactions Analysis Dashboard — Power BI
      </p>
      <a
        href="https://app.powerbi.com/view?r=eyJrIjoiZjUyM2U0NWMtNDZhYi00NjhlLWIwZTMtYWJlOGI1ZDgzODExIiwidCI6IjE5MWRkNjBkLTA5MGEtNDQ1OS1hMDcxLWIwM2M4MGYzYWMzYiJ9"
        target="_blank"
        rel="noreferrer"
        className="text-[9px] underline text-gray-700"
      >
        Dashboard
      </a>
    </div>

    <p className="text-[9.5px] text-gray-700 mt-0">
      <b>Tech:</b> Power BI • Power Query • Data Modeling
    </p>

    <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0 mt-0.5">
      <li>
        Built interactive dashboard tracking KPIs: <b>Total Amount (~3,474M)</b>, <b>Transactions (~300K)</b>, <b>Success Rate (~96%)</b>; analyzed service and transfer-type patterns.
      </li>
      <li>
        Identified key failure reasons (Wrong PIN, Server error, Bank denied) to support reliability monitoring.
      </li>
    </ul>
  </div>

  {/* Project 2 */}
<div className="mt-0.5">
  <p className="font-semibold text-xs text-gray-900">
    CKD Analytics — Kidney Transplant Outcomes Dashboard
  </p>

  <p className="text-[9.5px] text-gray-700 mt-0">
    <b>Tech:</b> Python • Pandas • NumPy • EDA • Correlation Analysis • Chart.js • Tailwind
  </p>

  <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0 mt-0.5">
    <li>
      Cleaned clinical datasets (<b>195 patients, 1,297 records</b>); computed recovery KPIs showing <b>Creatinine 7.48→1.55 mg/dL (+79.3%)</b>, <b>Hemoglobin 9.07→12.82 g/dL (+41.3%)</b>.
    </li>
    <li>
      Conducted correlation/risk analysis (Age, BMI, follow-up) and visualized insights via interactive dashboard with acceptance monitoring (<b>137 accepted, 58 rejected</b>).
    </li>
  </ul>
</div>
</section>

        <hr className="border-gray-300 my-1" />

        {/* =========================
            CERTIFICATIONS
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Certifications
          </h2>

          <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0.5">
            <li>
              <b>Deloitte Data Analytics Job Simulation</b> (Forage, Feb 2026)
            </li>
            <li>
              <b>SQL: Basic to Advanced</b> (Udemy, Oct 2025)
            </li>
            <li>
              <b>Introduction to Python</b> (Infosys Springboard, Aug 2024)
            </li>
            <li>
              <b>Data Analytics Program</b> (Top Varsity, Ongoing)
            </li>
            <li>
              <b>Computer Network</b> (Huawei Talent, Jan 2025)
            </li>
            <li>
              <b>Web Development</b> (Main Flow Services, 2024)
            </li>
          </ul>
        </section>

        <hr className="border-gray-300 my-1" />

        {/* =========================
            LANGUAGES
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Languages
          </h2>

          <p className="text-[10px] text-gray-700">
            {languages
              .map(({ name, level }) => `• ${name} (${level})`)
              .join(" ")}
          </p>
        </section>
      </div>

      {/* =========================
          PDF BUTTON
      ========================= */}
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