import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Work | Jonathan van Wersch",
  };
}

const workExperience = [
  {
    company: "Meta",
    logo: "/images/meta.webp",
    period: "October 2024 - Present",
    location: "London, UK",
    roles: [
      {
        title: "Software Engineer",
        responsibilities: ["Working in the mobile ads team"],
      },
      {
        title: "Senior Software Engineer",
        responsibilities: [
          "Improved build time by 500% and reduced memory consumption by 1700% for the compilation step of our front-end mono-repo by implementing improved tooling and setup, using Turbo, Esbuild, Tsup, and custom code, to enhance caching and introduce incremental compilation",
          "Engineered a server-side queuing system and reconciler for our virtual in-browser worlds using Node.js, Google Cloud and Firebase, to efficiently manage the transition of over 15,000 concurrent users during live events",
          "Implemented robust back-end services using TypeScript, Node.js, Google Cloud, Terraform, Fastify/Express, and Firebase for the management of all virtual events run by Improbable",
          "Orchestrated the re-architecture of our frontend, creating 10 modular GitHub packages with Next.js, React, Redux, and TypeScript; implemented automated publishing and changelog generation, as well as documentation, enabling code reuse across 8+ repositories used by internal and external developers, enhancing development efficiency and reducing bugs by more than 70%",
          "Mentored and led a team of four engineers, conducting planning sessions, standups, and bug triaging",
          "Led technical interviewing for many roles across multiple teams, conducting over 20 interviews for junior, senior and principal engineers, focusing on system design and coding proficiency",
        ],
      },
      {
        title: "Software Engineer",
        responsibilities: [
          "Led development of various front-end and back-end systems, powering 10+ high-profile virtual events, including Yuga Labs' Second Trip, which hosted over 7000 concurrent users",
          "Orchestrated the war-room operations for the web platform team during 5+ live events, delivering critical real-time updates and web metrics to a diverse team of 30+ employees",
          "Implemented a messaging system using Node.js, Firebase and PubNub for use during live events",
          "Promoted to a senior role in October 2023",
        ],
      },
    ],
  },
  {
    company: "Acre",
    logo: "/images/acre.webp",
    period: "January 2021 – May 2022",
    location: "London, UK",
    roles: [
      {
        title: "Software Engineer",
        responsibilities: [
          "Implemented React and TypeScript code for the front-end and established a design system to ensure consistency across various repositories",
          "Championed and augmented test coverage through comprehensive unit testing, authoring all end-to-end tests which resulted in a 50% increase in test coverage",
          "Led the front-end overhaul of Acre's mortgage sourcing application, greatly improving the overall user experience, which led to considerable praise from the brokers using the platform",
        ],
      },
    ],
  },
];

export default function Work() {
  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100">WORK</h1>
      <ol className="relative border-s border-gray-700">
        {workExperience.map((job, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-gray-900">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={20}
                height={20}
                className="rounded-full"
              />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100">
              {job.company}
            </h3>
            <div className="block mb-2 text-sm font-normal leading-none text-gray-400">
              <time>{job.period}</time>
              <span className="ml-2">{job.location}</span>
            </div>
            {job.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="mb-4">
                <span className="bg-gray-700 text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ring-1 ring-gray-600 ms-3">
                  {role.title}
                </span>
                <ul className="list-disc pl-5 mt-2 text-base font-normal text-gray-300">
                  {role.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="mb-2">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </>
  );
}
