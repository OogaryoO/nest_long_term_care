import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Badge from './Badge';
import './SearchComponent.css';

const SearchComponent = ({ onSearch, onSkillFilter, skills, selectedSkills = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSkillToggle = (skill) => {
    const newSelectedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    onSkillFilter(newSelectedSkills);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    onSearch('');
    onSkillFilter([]);
  };

  return (
    <div className="search-component">
      {/* Search Bar */}
      <div className="search-section">
        <div className="search-input-container">
          <Input
            type="text"
            placeholder="Search caregivers..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <Button 
            onClick={clearAllFilters}
            variant="outline"
            className="clear-button"
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Skills Filter */}
      <div className="skills-section">
        <h3 className="skills-title">Filter by Skills</h3>
        <div className="skills-container">
          {skills.map(skill => (
            <Badge
              key={skill}
              variant={selectedSkills.includes(skill) ? "active" : "outline"}
              className="skill-badge"
              onClick={() => handleSkillToggle(skill)}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedSkills.length > 0) && (
        <div className="active-filters">
          <h4 className="active-filters-title">Active Filters:</h4>
          <div className="active-filters-container">
            {searchTerm && (
              <Badge variant="secondary" className="filter-badge search-filter">
                Search: "{searchTerm}"
              </Badge>
            )}
            {selectedSkills.map(skill => (
              <Badge key={skill} variant="secondary" className="filter-badge skill-filter">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;