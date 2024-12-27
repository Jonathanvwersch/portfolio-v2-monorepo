import { Backend } from '@packages/assets/icons/backend';
import { Code } from '@packages/assets/icons/code';
import { Frontend } from '@packages/assets/icons/frontend';
import { Infrastructure } from '@packages/assets/icons/infrastructure';

export async function generateMetadata() {
  return {
    title: 'Skills | Jonathan van Wersch',
  };
}

export default function Skills() {
  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100 text-center">SKILLS</h1>
      <div className="px-6 sm:px-0">
        <ol className="relative border-s border-gray-700">
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -start-3 ring-8 ring-gray-900">
              <Code />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100">
              Programming
            </h3>
            <div className="flex flex-wrap gap-2 my-4">
              {['TypeScript', 'JavaScript', 'Python', 'Data Structures', 'Algorithms'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="flex items-center justify-center px-3 py-1 bg-gray-700 rounded-md text-sm text-white ring-1 ring-gray-600"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -start-3 ring-8 ring-gray-900">
              <Frontend />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-100">Front End</h3>
            <div className="flex flex-wrap gap-2 my-4">
              {[
                'React',
                'React Native',
                'NextJs',
                'Redux',
                'GraphQL (Apollo)',
                'npm ecosystem',
                'Cypress',
                'Jest',
                'CSS',
              ].map((skill) => (
                <span
                  key={skill}
                  className="flex items-center justify-center px-3 py-1 bg-gray-700 rounded-md text-sm text-white ring-1 ring-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -start-3 ring-8 ring-gray-900">
              <Backend />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-100">Back End</h3>
            <div className="flex flex-wrap gap-2 my-4">
              {['NodeJs', 'PostgreSQL', 'Firebase', 'REST APIs', 'Apollo Server'].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center px-3 py-1 bg-gray-700 rounded-md text-sm text-white ring-1 ring-gray-600"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -start-3 ring-8 ring-gray-900">
              <Infrastructure />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-100">Infrastructure</h3>
            <div className="flex flex-wrap gap-2 my-4">
              {['Docker', 'AWS', 'GCP', 'Terraform'].map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center justify-center px-3 py-1 bg-gray-700 rounded-md text-sm text-white ring-1 ring-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
