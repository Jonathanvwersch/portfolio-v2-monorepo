"use client";

import React, { useState } from "react";
import { RaceCard } from "./race-card";

const marathons = [
  {
    imagePath: "/images/istanbul-marathon.png",
    raceName: "Istanbul Marathon",
    time: "3:11",
    date: "November 2022",
    location: "Istanbul, Turkey",
    description: "My first marathon. I was aiming for a sub-three hour time, but hit a wall at around 32km. With more training and experience, I believe a sub-three is within reach."
  },
  {
    imagePath: "/images/malaga-marathon.jpg",
    raceName: "Malaga Marathon",
    time: "3:33",
    date: "December 2024",
    location: "Malaga, Spain",
    description: "First competitive race since recovering from a torn ACL. Not as quick as my last, but I deliberately took a more conservative approach in training to see how my new ACL would hold up. Fortunately, there were not issues so I think I can push myself harder next time."
  }
];

export function SportsContent() {
  const [activeTab, setActiveTab] = useState<"marathons" | "half-marathons">("marathons");
  const halfMarathons: typeof marathons = [];

  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100 text-center">SPORTS</h1>
    
      <div className="mb-8">
        <div className="mb-4 flex space-x-2">
          <button
            onClick={() => setActiveTab("marathons")}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ease-in-out ring-1
              ${
                activeTab === "marathons"
                  ? "bg-gray-800 text-white ring-gray-800"
                  : "bg-transparent text-gray-300 ring-gray-700 hover:text-white"
              }`}
          >
            MARATHONS
          </button>
          <button
            onClick={() => setActiveTab("half-marathons")}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ease-in-out ring-1
              ${
                activeTab === "half-marathons"
                  ? "bg-gray-800 text-white ring-gray-800"
                  : "bg-transparent text-gray-300 ring-gray-700 hover:text-white"
              }`}
          >
            HALF MARATHONS
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          {activeTab === "marathons" && marathons.map((race) => (
            <RaceCard key={race.raceName} {...race} />
          ))}
          {activeTab === "half-marathons" && halfMarathons.map((race) => (
            <RaceCard key={race.raceName} {...race} />
          ))}
        </div>
      </div>
    </>
  );
} 