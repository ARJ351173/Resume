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
  "ERP & MIS": [
    "ERP Implementation",
    "ERP Administration",
    "MIS Reporting",
    "User Training",
    "Requirement Gathering",
    "User Acceptance Testing (UAT)",
    "Process Digitization",
    "QR/Barcode Labelling",
    "Sales Analysis",
  ],
  "Databases & Tools": ["MySQL", "Git/GitHub"],
  Strengths: [
    "Data Cleaning & Validation",
    "Exploratory Data Analysis (EDA)",
    "Data Modeling",
    "Data Visualization",
    "Analytical Reporting",
    "Statistical Analysis",
    "Data Quality Management",
    "Process Improvement",
    "Stakeholder Communication",
    "Problem Solving",
    "Commercial Thinking",
  ],
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
        <header className="mb-1">
        

          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900">Aryan Jain</h1>

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
          </div>
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
          <b>MIS Executive / Data Analyst</b> leading a <b>paper-to-ERP transition</b> at a footwear and clothing manufacturer, covering ERP rollout, training 23 employees, vendor coordination and sales analysis. BCA graduate skilled in <b>Excel, Power BI, SQL and Python</b>, with hands-on experience in <b>data cleaning, dashboards and reporting</b> that turn raw data into business decisions.
          </p>
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
              Delhi NCR | Apr 2023 – Mar 2026 | GPA: 3.4/4.0
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
            SKILLS (ATS FRIENDLY)
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Skills
          </h2>

          <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0">
            <li className="text-[9.5px]"><b>Analytics & BI:</b> {skillCategories["Analytics & BI"].join(" • ")}</li>
            <li><b>ERP & MIS:</b> {skillCategories["ERP & MIS"].join(" • ")}</li>
            <li><b>Databases & Tools:</b> {skillCategories["Databases & Tools"].join(" • ")}</li>
            <li><b>GenAI Tools:</b> GitHub Copilot • Claude AI • ChatGPT (coding, data analysis, reporting)</li>
            <li><b>Core Strengths:</b> {skillCategories["Strengths"].join(" • ")}</li>
            <li><b>Languages:</b> {languages.map(({ name, level }) => `${name} (${level})`).join(" • ")}</li>
          </ul>
        </section>

        <hr className="border-gray-300 my-1" />

        {/* =========================
            WORK EXPERIENCE
        ========================= */}
        <section>
          <h2 className="text-sm font-bold uppercase mb-0.5 text-gray-900">
            Work Experience
          </h2>

          {/* Indian Plastic Footwear and Clothing */}
          <div className="mt-0.5">
            <p className="font-semibold text-xs text-gray-900">
              Indian Plastic Footwear And Clothing Pvt. Ltd. — MIS Executive / Data Analyst
            </p>
            <p className="text-[10px] text-gray-600 mb-0.5">
              Bahadurgarh | May 2026 – Present
            </p>

            <ul className="list-disc pl-4 text-[10px] text-gray-700 space-y-0">
              <li>
                Leading the move from a <b>fully paper-based system to a custom ERP</b>, covering stock, orders, billing and dispatch, to give the company <b>real-time tracking</b> for the first time. Also act as ERP admin.
              </li>
              <li>
                Worked with the <b>ERP vendor's development team</b> on module design, turning shop-floor and office workflows into requirements and reporting bugs from testing.
              </li>
              <li>
                <b>Trained 23 employees across 4 departments</b> (Sales 10, Accounts 6, Warehouse 4, Inventory 3) to run daily work on the ERP.
              </li>
              <li>
                Monitor operations such as <b>QR code printing and labelling</b>, checking that the defined process flow is followed on the floor.
              </li>
              <li>
                Analysing <b>historical sales data</b> in <b>Excel</b> and <b>Power BI</b> to find the top-selling articles and where they sell, and studying the drivers behind their performance. Clean the data (name errors, duplicates) with <b>Python (Pandas)</b>.
              </li>
            </ul>
          </div>

        {/* Sir Ganga Ram Hospital */}
<div className="mt-0.5">
  <p className="font-semibold text-xs text-gray-900">
    Sir Ganga Ram Hospital (SGRH) — Data Analytics Intern (CKD Analytics)
  </p>
  <p className="text-[10px] text-gray-600 mb-0.5">
    New Delhi | Jan 2026 – Mar 2026
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
                Built a medical reminder web app with structured tracking for <b>100+ test users</b>.
              </li>
              <li>
                Improved the app's page structure and speed, reducing load time by <b>~30%</b>.
              </li>
              <li>
                Worked in a <b>4-member team</b> to add user engagement tracking, increasing feature use by <b>~20%</b>.
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
                Developed responsive web pages, improving user experience and load speed by <b>~20%</b>.
              </li>
              <li>
                Analyzed website performance metrics, contributing to <b>~15%</b> efficiency improvements.
              </li>
              <li>
                Delivered <b>3+ live project components</b> used in production.
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

          <ul className="list-disc pl-4 grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] text-gray-700">
            <li><b>Deloitte Australia Data Analytics Job Simulation</b> (Forage, Feb 2026)</li>
            <li><b>Tata Group Data Analytics Job Simulation</b> (Forage, Feb 2026)</li>
            <li><b>Quantium Data Analytics Job Simulation</b> (Forage, Feb 2026)</li>
            <li><b>SQL: Basic to Advanced</b> (Udemy, Oct 2025)</li>
            <li><b>Introduction to Python</b> (Infosys Springboard, Aug 2024)</li>
            <li><b>Complete MySQL Bootcamp: Learn SQL Step by Step</b> (Udemy, Feb 2026)</li>
          </ul>
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