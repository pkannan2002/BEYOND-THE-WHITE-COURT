import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Heart className="text-blue-500 animate-pulse" size={48} />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
        Beyond the White Coat Doctors' Secret Struggles
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 text-center max-w-prose leading-relaxed">
          <span className="font-semibold">What inspired me to write these stories?</span> <br />
          A simple conversation with my dad's close friend—a doctor. <br /><br />
          He spoke about the immense pressure doctors face every day, yet they remain calm in life-and-death situations. <br />
          Even after losing a patient despite their best efforts, they carry on with resilience. <br /><br />
          These are not just professionals; they are humans who sacrifice time with their families, 
          working tirelessly for strangers they may never meet.
        </p>

        {/* Call to Action */}
        <p className="mt-8 text-gray-500 text-center max-w-prose leading-relaxed">
          Dive into real-life stories of doctors who share their struggles, triumphs, and emotions. <br />
          Let’s bring their hidden sacrifices into the light. <br /><br />
          <span className="font-medium">Select a doctor from the sidebar to read their story.</span>
        </p>
      </div>
    </div>
  );
}
