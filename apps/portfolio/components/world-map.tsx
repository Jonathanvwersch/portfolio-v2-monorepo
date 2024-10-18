"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

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
  return (
    <div className="w-full h-full">
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

              if (geo.properties.name.includes("Switzerland")) {
                console.log(geo.properties.name);
              }

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isLived ? "orange" : isVisited ? "green" : "#DDD"}
                  stroke="#FFF"
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
