"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { ComingSoon } from "@/components/coming-soon";
import { TripsPage } from "@/components/trips-page";

export default function Home() {
  const [showTrips, setShowTrips] = useState(false);

  if (showTrips) {
    return <TripsPage onBack={() => setShowTrips(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Hero onExplore={() => setShowTrips(true)} />
      <ComingSoon onExplore={() => setShowTrips(true)} />
    </div>
  );
}
