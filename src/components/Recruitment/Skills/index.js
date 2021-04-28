import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Skills.scss';
import ItemSkill from './ItemSkill';

Skills.propTypes = {
  allSkill: PropTypes.array.isRequired,
};

function Skills({ allSkill }) {
  const showSkill = allSkill.map(skill => (
    <ItemSkill key={skill.id} itemSkill={skill} />
  ));
  return <Fragment>{showSkill}</Fragment>;
}

export default Skills;
