import React from "react";

/* =========================
   PRINT STYLES (A4)
========================= */
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
        <header className="text-center mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Aryan Jain</h1>

          <p className="text-sm mt-0.5 text-gray-800">
            Christ University, Delhi NCR, India
          </p>

          <p className="text-xs text-gray-700 mt-0.5">
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

        <hr className="border-gray-400 my-1.5" />

        {/* =========================
            PROFESSIONAL SUMMARY
        ========================= */}
        <section>
          <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
            Professional Summary
          </h2>

          <p className="text-[11px] text-gray-800 leading-tight">
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

        <hr className="border-gray-300 my-1.5" />

        {/* =========================
            SKILLS (ATS FRIENDLY)
        ========================= */}
        <section>
          <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
            Skills
          </h2>

          <div className="text-[11px] text-gray-700 space-y-0.5">
            <p className="whitespace-nowrap text-[10.5px]">
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

        <hr className="border-gray-300 my-1.5" />

        {/* =========================
            WORK EXPERIENCE
        ========================= */}
        <section>
          <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
            Work Experience
          </h2>

          {/* Gudmed */}
          <div className="mt-1">
            <div className="flex justify-between gap-2">
              <p className="font-semibold text-sm text-gray-900">
                Gudmed — Front-End Developer Intern
              </p>
            </div>
            <p className="text-xs text-gray-600 mb-1">
              Gurgaon | May 2025 – July 2025
            </p>

            <ul className="list-disc pl-5 text-[11px] text-gray-700 space-y-0.5">
              <li>
                Built a medical reminder web app using <b>React.js</b> enabling
                structured tracking and visualization of daily medication intake
                for <b>100+ test users</b>.
              </li>
              <li>
                Integrated <b>Firebase Realtime Database</b> for consistent data
                synchronization and improved reliability of user logs.
              </li>
              <li>
                Improved performance by optimizing UI rendering and component
                structure, reducing load time by <b>~30%</b> (measured using web
                performance tools).
              </li>
              <li>
                Worked with a 4-member team to implement engagement tracking and
                improve feature adoption by <b>~20%</b>.
              </li>
            </ul>
          </div>

          {/* Main Flow */}
          <div className="mt-2">
            <p className="font-semibold text-sm text-gray-900">
              Main Flow Services and Technologies Pvt. Ltd — Front-End Developer Intern
            </p>
            <p className="text-xs text-gray-600 mb-1">
              Ghaziabad | May 2024 – July 2024
            </p>

            <ul className="list-disc pl-5 text-[11px] text-gray-700 space-y-0.5">
              <li>
                Developed responsive web pages using <b>HTML, CSS, and JavaScript</b>,
                improving UX and load speed by <b>~20%</b>.
              </li>
              <li>
                Analyzed performance metrics using <b>Chrome DevTools</b> and{" "}
                <b>Lighthouse</b>, contributing to efficiency improvements by <b>~15%</b>.
              </li>
              <li>
                Collaborated with backend team to ensure clean integration of data
                into UI workflows and consistent delivery across modules.
              </li>
              <li>
                Strengthened problem-solving by delivering <b>3+ live project components</b>
                in production environments.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* =========================
            EDUCATION
        ========================= */}
        <section>
          <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
            Education
          </h2>

          <div className="mt-1">
            <p className="font-semibold text-sm text-gray-900">
              Christ University — Bachelor of Computer Applications (BCA)
            </p>
            <p className="text-xs text-gray-600">
              Delhi NCR | Apr 2023 – Present | GPA: 3.4/4.0
            </p>
          </div>

          <div className="mt-2">
            <p className="font-semibold text-sm text-gray-900">
              St. Mary’s School — Secondary Education
            </p>
            <p className="text-xs text-gray-600">Mar 2023</p>
          </div>
        </section>

        <hr className="border-gray-300 my-1.5" />

       {/* =========================
    PROJECTS
========================= */}
<section>
  <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
    Projects
  </h2>

  {/* Project 1 */}
  <div className="mt-1">
    <div className="flex items-center justify-between gap-2">
      <p className="font-semibold text-sm text-gray-900">
        PhonePe Transactions Analysis Dashboard — Power BI
      </p>
      <a
        href="https://app.powerbi.com/view?r=eyJrIjoiZjUyM2U0NWMtNDZhYi00NjhlLWIwZTMtYWJlOGI1ZDgzODExIiwidCI6IjE5MWRkNjBkLTA5MGEtNDQ1OS1hMDcxLWIwM2M4MGYzYWMzYiJ9"
        target="_blank"
        rel="noreferrer"
        className="text-[11px] underline text-gray-700"
      >
        Dashboard
      </a>
    </div>

    <p className="text-[11px] text-gray-700 mt-0.5">
      <b>Tech:</b> Power BI • Power Query • Data Modeling
    </p>

    <ul className="list-disc pl-5 text-[11px] text-gray-700 space-y-0.5 mt-1">
      <li>
        Built an interactive Power BI dashboard to track transaction KPIs such as <b>Total Amount (~3,474M)</b>, <b>Transactions (~300K)</b>,
        and <b>Success Rate (~96%)</b>.
      </li>
      <li>
        Analyzed service-wise performance (Insurance, Loans, Money Transfer, Recharge & Bills) and transfer-type patterns (UPI, QR, Mobile).
      </li>
      <li>
        Identified key failure reasons (Wrong PIN, Server error, Bank denied) to support reliability monitoring.
      </li>
    </ul>
  </div>

  {/* Project 2 */}
<div className="mt-2">
  <p className="font-semibold text-sm text-gray-900">
    CKD Analytics — Kidney Transplant Outcomes Dashboard
  </p>

  <p className="text-[11px] text-gray-700 mt-0.5">
    <b>Tech:</b> Python • Pandas • NumPy • EDA • Data Cleaning • Correlation Analysis • HTML • Tailwind • JS • Chart.js
  </p>

  <ul className="list-disc pl-5 text-[11px] text-gray-700 space-y-0.5 mt-1">
    <li>
      Cleaned and processed clinical datasets using <b>Python (Pandas/NumPy)</b> to prepare structured recovery-stage data for analysis
      (<b>195 patients</b>, <b>1,297 records</b>, 7 time points).
    </li>
    <li>
      Computed key recovery KPIs showing strong improvement: <b>Creatinine 7.48 → 1.55 mg/dL (+79.3%)</b> and
      <b>Hemoglobin 9.07 → 12.82 g/dL (+41.3%)</b>.
    </li>
    <li>
      Performed <b>trend and outcome analysis</b> across recovery stages with acceptance monitoring
      (<b>137 accepted</b>, <b>58 rejected</b>) for post-transplant evaluation.
    </li>
    <li>
      Conducted <b>correlation and risk-factor analysis</b> (Age, BMI, follow-up frequency, creatinine) to identify drivers of recovery and
      visualized insights through an interactive dashboard using <b>Chart.js</b>.
    </li>
  </ul>
</div>
</section>

        <hr className="border-gray-300 my-1.5" />

        {/* =========================
            CERTIFICATIONS
        ========================= */}
        <section>
          <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
            Certifications
          </h2>

          <ul className="list-disc pl-5 text-[11px] text-gray-700 space-y-0.5">
            <li>SQL: Basic to Advanced Skills for Analysts & Engineers — Udemy (Oct 2025)</li>
            <li>Introduction to Python — Infosys Springboard (Aug 2024)</li>
            <li>Data Analytics Program — Top Varsity (Ongoing)</li>
            <li>Computer Network — Huawei Talent (Jan 2025)</li>
            <li>Web Development Internship — Main Flow Services (2024)</li>
          </ul>
        </section>

        <hr className="border-gray-300 my-1.5" />

        {/* =========================
            LANGUAGES
        ========================= */}
        <section>
          <h2 className="text-md font-bold uppercase mb-1 text-gray-900">
            Languages
          </h2>

          <p className="text-[11px] text-gray-700">
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