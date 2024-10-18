import { WorldMap } from "@/components/world-map";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Travel | Jonathan van Wersch",
  };
}

export default function Travel() {
  return (
    <>
      <h1 className="font-bold mb-4 text-gray-100 text-center">TRAVEL</h1>
      <div className="mt-8">
        <WorldMap />
      </div>
    </>
  );
}
