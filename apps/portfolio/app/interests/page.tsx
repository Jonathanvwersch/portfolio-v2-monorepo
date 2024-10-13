import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Interests | Jonathan van Wersch",
  };
}

export default function Work() {
  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100 text-center">INTERESTS</h1>
      <ol className="relative border-s border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-gray-900">
            <Image
              src="/images/improbable.webp"
              alt="Improbable logo"
              width={20}
              height={20}
              className="rounded-full"
            />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100">
            Improbable
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
            May 2022 - Present
          </time>
          <span className="bg-gray-700 text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ring-1 ring-gray-600 ms-3">
            Senior Software Engineer
          </span>
          <ul className="list-disc pl-5 mb-4 text-base font-normal text-gray-300">
            <li>
              Improved build time by 500% and reduced memory consumption by
              1700% for the front-end mono-repo compilation
            </li>
            <li>
              Engineered a server-side queuing system managing over 15,000
              concurrent users during live events
            </li>
            <li>
              Implemented back-end services using TypeScript, Node.js, Google
              Cloud, Terraform, Fastify/Express, and Firebase
            </li>
            <li>
              Re-architected front-end code into ten shared and modular GitHub
              packages
            </li>
            <li>Mentored and led a team of four engineers</li>
            <li>
              Conducted over 20 technical interviews for various engineering
              roles
            </li>
          </ul>
          <span className="bg-gray-700 text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ring-1 ring-gray-600 ms-3">
            Software Engineer
          </span>
          <ul className="list-disc pl-5 mb-4 text-base font-normal text-gray-300">
            <li>
              Developed front-ends and back-end for a web platform hosting over
              10 high-profile live events
            </li>
            <li>Orchestrated war-room operations during 5+ live events</li>
            <li>
              Implemented a messaging system using Node.js, Firebase and PubNub
              for live events
            </li>
            <li>Promoted to senior role in October 2023</li>
          </ul>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-gray-900">
            <Image
              src="/images/acre.webp"
              alt="Acre logo"
              width={20}
              height={20}
              className="rounded-full"
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-100">Acre</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
            Jan 2021 - May 2022
          </time>
          <span className="bg-gray-700 text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ring-1 ring-gray-600 ms-3">
            Graduate Software Engineer
          </span>
          <ul className="list-disc pl-5 text-base font-normal text-gray-300">
            <li>
              Implemented React and TypeScript code for the front-end and
              established a design system
            </li>
            <li>
              Increased test coverage by 50% through comprehensive unit testing
              and authoring all end-to-end tests
            </li>
            <li>
              Led the front-end overhaul of Acre&apos;s mortgage sourcing
              application, improving user experience
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
}
