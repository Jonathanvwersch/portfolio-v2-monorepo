"use client";
import { ChevronDown, ChevronUp } from "@packages/assets/icons/chevron";
import { useState } from "react";
import Link from "next/link";
import { Code } from "@packages/assets/icons/code";

type Props = Readonly<{
  title: string;
  date: string;
  leadingLine: string;
  skills?: string[];
  linkCode?: string;
  linkProject?: string;
  bulletPoints?: string[];
}>;

export function ProjectAndLearningCard({
  title,
  date,
  leadingLine,
  bulletPoints,
  skills,
  linkCode,
  linkProject,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="mb-6 w-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-750"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="w-full py-2.5 px-4 bg-gray-800 rounded-md text-sm text-gray-200 ring-1 ring-gray-700 hover:ring-gray-600">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg text-white">{title}</h2>
          <div className="flex items-center">
            <time className="text-xs font-normal text-gray-400 mr-4 mt-0.5">
              {date}
            </time>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-300 mb-2">
          {leadingLine}
        </p>
        {isExpanded && (
          <div className="mt-2">
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="list-disc pl-5 mb-4 text-sm font-normal text-gray-500 dark:text-gray-300">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
            {linkProject || linkCode ? (
              <div className="mb-4 mt-5 flex gap-2">
                {linkProject && (
                  <Link
                    href={linkProject}
                    className="inline-block px-3 py-1 text-xs font-medium text-gray-300 border border-gray-500 rounded hover:bg-gray-700 hover:text-gray-200 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project
                  </Link>
                )}
                {linkCode && (
                  <Link
                    href={linkCode}
                    className="flex px-3 py-1 text-xs font-medium text-gray-300 border border-gray-500 rounded hover:bg-gray-700 hover:text-gray-200 transition-colors duration-300 whitespace-nowrap gap-2 items-center"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code />
                    View code
                  </Link>
                )}
              </div>
            ) : null}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
