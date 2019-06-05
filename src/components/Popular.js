import React, { Component } from 'react';
import PropTypes from 'prop-types';

function LanguageNav({selected, onUpdateLanguage}) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={language === selected ? {color: 'rgba(204,31,115,1)'} : null}
            onClick={()=> onUpdateLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

LanguageNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    const { selectedLanguage } = this.state
    
    return (
      <React.Fragment>
        <LanguageNav
          selected = {selectedLanguage}
          onUpdateLanguage = {this.updateLanguage}
        />
      </React.Fragment>
      )
  }
}

export default Popular;