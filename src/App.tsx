import React, { useState } from 'react';
import { doctors } from './data/doctors';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import DoctorProfile from './components/DoctorProfile';
import Advertisement from './components/Advertisement';
import { Doctor } from './types';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showAd, setShowAd] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {showAd && <Advertisement onClose={() => setShowAd(false)} />}
      
      <div className="flex">
        <Sidebar
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          onSelectDoctor={setSelectedDoctor}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        
        <div className="flex-1">
          <Header 
            setIsSidebarOpen={setIsSidebarOpen} 
            isSidebarOpen={isSidebarOpen}
          />
          <main className="min-h-screen">
            {selectedDoctor ? (
              <DoctorProfile doctor={selectedDoctor} />
            ) : (
              <Hero />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;