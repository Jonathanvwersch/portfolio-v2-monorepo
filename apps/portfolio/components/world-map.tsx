"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";

const visitedCountries = [
  "Canada",
  "Andorra",
  "Austria",
  "Croatia",
  "France",
  "Germany",
  "Greece",
  "Italy",
  "Kuwait",
  "Luxembourg",
  "Hungary",
  "Monaco",
  "Switzerland",
  "Norway",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Slovenia",
  "Russia",
  "Singapore",
  "Spain",
  "Sweden",
  "Thailand",
  "Turkey",
  "Egypt",
  "Cyprus",
  "United Arab Emirates",
  "Vatican City",
];

const livedCountries = [
  "Netherlands",
  "United Kingdom",
  "United States of America",
  "Germany",
  "Oman",
  "Belgium",
];

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

export function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full h-full relative">
      <legend className="flex gap-5">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-2">Visited ({visitedCountries.length})</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="ml-2">Lived ({livedCountries.length})</span>
        </div>
      </legend>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isVisited = visitedCountries.includes(geo.properties.name);
              const isLived = livedCountries.includes(geo.properties.name);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isLived ? "orange" : isVisited ? "green" : "#DDD"}
                  stroke="#FFF"
                  onMouseEnter={(e) => {
                    const { clientX, clientY } = e;
                    setTooltipContent(geo.properties.name);
                    setTooltipPosition({ x: clientX, y: clientY });
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      outline: "none",
                      cursor: "pointer",
                      opacity: 0.8,
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div
          className="fixed z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y - 10,
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
