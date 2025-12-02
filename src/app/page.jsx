"use client";

import { HomeHero } from "@/widgets/home-hero/ui/HomeHero/HomeHero";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs/WhyChooseUs";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
    </>
  );
}
