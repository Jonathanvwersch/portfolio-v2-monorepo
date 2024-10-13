export async function generateMetadata() {
  return {
    title: "Education | Jonathan van Wersch",
  };
}

export default function Education() {
  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100 text-center">EDUCATION</h1>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        University of Bath
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        September 2015 to July 2020
      </time>
      <span className="bg-gray-700 text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ring-1 ring-gray-600">
        First Class Honours
      </span>
      <p className="mt-4 mb-1">
        Completed an integrated masters in mechanical engineering
      </p>
      <ul className="list-disc pl-5 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <li>
          Modules studied include System Modelling and Simulation, Design, Fluid
          Dynamics, Systems and Control, Solid Mechanics, Design, and Business
          Processes
        </li>
        <li>
          Project manager and systems integrator for the Bath University Rocket
          team
        </li>
        <li>
          Completed a year-long placement at GKN Aerospace and an internship at
          Unilever
        </li>
        <li>
          Played a number of sports throughout my time at university, including
          the University&apos;s 2nd volleyball team
        </li>
      </ul>
    </>
  );
}
