import Tutorial from "@/components/home/Tutorial";
import ScrollUp from "@/components/common/ScrollUp";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imazon Forms",
  description: "Imazon Forms é um sistema de gestão de dados e formulários.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Tutorial />
      <VideoSection />
      <Contact />
    </>
  );
}