import { Doctor } from '../types';
import { Heart, Award, Quote } from 'lucide-react';

interface DoctorProfileProps {
  doctor: Doctor;
}

export default function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
        <img
          src={doctor.imageUrl}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <div className="flex items-center space-x-2 text-blue-300 mb-3">
            <Heart size={20} />
            <Award size={20} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-white">{doctor.name}</h1>
          <p className="text-xl text-blue-100">{doctor.specialty}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex items-start space-x-3 mb-8">
          <Quote className="text-blue-500 flex-shrink-0" size={32} />
          <blockquote className="text-2xl italic text-gray-700 leading-relaxed">
            "{doctor.quote}"
          </blockquote>
        </div>

        <div className="prose prose-lg max-w-none">
          {doctor.story.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}