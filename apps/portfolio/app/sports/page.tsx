import { SportsContent } from "@/components/sports-content";

export async function generateMetadata() {
  return {
    title: "Sports | Jonathan van Wersch",
  };
}

export default function Sports() {
  return <SportsContent />;
}
