import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ skills, selectedSkill, onSelectSkill }) => {
  return (
    <div className="filter-sidebar">
      <h4>Filter by Skill</h4>
      <ul>
        <li
          className={!selectedSkill ? 'active' : ''}
          onClick={() => onSelectSkill(null)}
        >
          All
        </li>
        {skills.map(skill => (
          <li
            key={skill}
            className={selectedSkill === skill ? 'active' : ''}
            onClick={() => onSelectSkill(skill)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
