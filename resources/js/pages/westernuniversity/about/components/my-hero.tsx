import { Button } from "@/components/ui/button";
import React from "react";

const MyHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-[#1e3a8a] via-[#2e63d9] to-[#0f172a] flex flex-col justify-center items-center px-6 py-20 text-white">
        <div className="max-w-4xl text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
            Our Vision
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90">
            Western International School aims to be the leading and most
            progressive bilingual international school in Cambodia.
          </p>
        </div>

        <div className="w-full max-w-6xl mt-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="/assets/demo-images/OurVision.jpg"
            alt="Our Vision"
            className="w-full h-full object-cover aspect-[21/9]"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16">
            Our Mission
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
            {/* Mission Left */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-[#d4050d] text-lg md:text-xl space-y-6">
              <p>
                We provide students with a strong academic foundation
                in a nurturing and globally aware environment.
              </p>
              <p>
                Our commitment to bilingual education fosters critical thinking
                and cultural understanding.
              </p>
              <p>
                Integrity, innovation, and inclusivity drive our everyday goals.
              </p>
            </div>

            {/* Mission Right */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-[#244494] text-lg md:text-xl space-y-6">
              <p>
                We empower students to become independent thinkers and lifelong
                learners.
              </p>
              <p>
                Our curriculum is designed to cultivate leadership,
                responsibility, and creativity.
              </p>
              <p>
                We strive to create an inclusive and forward-thinking community.
              </p>
              <p>
                Excellence in education is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyHero;
