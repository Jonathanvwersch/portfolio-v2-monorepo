"use client";

import Image from "next/image";

interface RaceCardProps {
  imagePath: string;
  raceName: string;
  time: string;
  date: string;
  location: string;
  description?: string;
}

export function RaceCard({ imagePath, raceName, time, date, location, description }: RaceCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col md:flex-row h-auto">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[12rem]">
        <Image
          src={imagePath}
          alt={`${raceName} race photo`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">{raceName}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>
        {description && (
          <p className="text-gray-300 text-sm mt-auto">{description}</p>
        )}
      </div>
    </div>
  );
} 