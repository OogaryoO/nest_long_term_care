import React, { useState, useMemo } from 'react';
import SearchComponent from '../components/SearchComponent';
import WorkerCard from '../components/WorkerCard';
import Button from '../components/Button';
import workers from '../workers.json';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Get all unique skills from the workers data
  const allSkills = useMemo(() => {
    return [...new Set(workers.flatMap(worker => worker.skills))];
  }, []);

  // Filter workers based on search term and selected skills
  const filteredWorkers = useMemo(() => {
    return workers.filter(worker => {
      const matchesSearch = searchTerm === '' || 
        worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSkills = selectedSkills.length === 0 ||
        selectedSkills.every(skill => worker.skills.includes(skill));

      return matchesSearch && matchesSkills;
    });
  }, [searchTerm, selectedSkills]);

  return (
    <div className="home-page">
      <div className="home-container">
        
        {/* Hero Section with Search */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Trusted <span className="hero-highlight">Caregivers</span>
            </h1>
            <p className="hero-description">
              Connect with experienced, compassionate caregivers who provide quality long-term care services.
            </p>
          </div>
          
          <SearchComponent
            onSearch={setSearchTerm}
            onSkillFilter={setSelectedSkills}
            skills={allSkills}
            selectedSkills={selectedSkills}
          />
        </div>

        {/* Results Section */}
        <div className="results-section">
          <div className="results-header">
            <h2 className="results-title">
              Available Caregivers
              <span className="results-count">
                ({filteredWorkers.length} found)
              </span>
            </h2>
          </div>

          {/* Worker Cards Grid */}
          {filteredWorkers.length > 0 ? (
            <div className="workers-grid">
              {filteredWorkers.map(worker => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <div className="no-results-icon">🔍</div>
                <h3 className="no-results-title">No caregivers found</h3>
                <p className="no-results-text">
                  Try adjusting your search terms or filters to find more results.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <h3 className="cta-title">Ready to Get Started?</h3>
          <p className="cta-description">
            Join thousands of families who have found trusted caregivers through our platform.
            Create your account today and start connecting with qualified professionals.
          </p>
          <div className="cta-buttons">
            <Button className="cta-button-primary">
              Get Started
            </Button>
            <Button variant="outline" className="cta-button-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
