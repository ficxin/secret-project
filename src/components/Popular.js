import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

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
      selectedLanguage: 'All',
      repos: null,
      error: null
    }

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null
    })

    fetchPopularRepos(selectedLanguage)
      .then((repos) => this.setState({
        repos,
        error: null,
      }))
      .catch(() => {
        this.setState({
          error: `There was an error fetching the repositories.`
        })
      })
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state

    return repos === null && error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state
    
    return (
      <React.Fragment>
        <LanguageNav
          selected = {selectedLanguage}
          onUpdateLanguage = {this.updateLanguage}
        />
        {this.isLoading() && <p>Loading...</p>}
        {repos && <p>{JSON.stringify(repos, null, 2)}</p>}
        {error && <p>{error}</p>}
      </React.Fragment>
      )
  }
}

export default Popular;