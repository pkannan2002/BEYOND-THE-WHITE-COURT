
import { Stethoscope, Home } from 'lucide-react';
import { Doctor } from '../types';

interface SidebarProps {
  doctors: Doctor[];
  selectedDoctor: Doctor | null;
  onSelectDoctor: (doctor: Doctor | null) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  doctors,
  selectedDoctor,
  onSelectDoctor,
  isOpen,
  setIsOpen
}: SidebarProps) {
  return (
    <aside
      className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <Stethoscope className="text-blue-600" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800">Our Doctors</h2>
        </div>

        <button
          onClick={() => {
            onSelectDoctor(null);
            setIsOpen(false);
          }}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 w-full"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </button>
        
        <nav className="space-y-2">
          {doctors.map((doctor) => (
            <button
              key={doctor.id}
              onClick={() => {
                onSelectDoctor(doctor);
                setIsOpen(false);
              }}
              className={`
                w-full text-left p-4 rounded-lg transition-all duration-200
                transform hover:scale-102 hover:shadow-md
                ${selectedDoctor?.id === doctor.id
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                }
              `}
            >
              <h3 className="font-medium mb-1">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}