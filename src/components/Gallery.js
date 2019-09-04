import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { getArtistExhibit } from '../utils/api';

class Display extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    image_urls: [],
    artist_bio: '',
    mainImageIndex: 0,
  }
  
  componentDidMount() {
    const { match } = this.props;
    const { image_urls, name }  = getArtistExhibit(match.params.id);

    this.setState(() => ({
      image_urls,
      name,
    }));
  }

  updateMainImage = (mainImageIndex) => {
    this.setState(() => ({ 
      mainImageIndex
    }));
  }

  render () {
    const { match } = this.props;
    const { image_urls, name, mainImageIndex} = this.state;

    return (
      <React.Fragment>
        <header>{name}</header>
        <Link 
          to={'/'} 
          className='nav-button back-home'>
            <span>&#9001;</span>
        </Link>
        <div className='display-wrapper'>
          <section className='display-container'>
            <div className='display-main'>
              <img
                src={image_urls[mainImageIndex]}
                alt={match.params.id}
              />
            </div>
            <div className='display-selector'>
              <ul className='display-collection'>
                {image_urls.map((image_url, i) => (
                  <li key={i} className='display-item'>
                    <img
                      src={image_url}
                      alt={`${match.params.id}${i}`}
                      onClick={() => this.updateMainImage(i)}
                      style={i === mainImageIndex ? { opacity: 1} : null}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

function Gallery({ match }) {
  return (
    <React.Fragment>
      <Route path={`${match.path}/:id`} component={Display} />
    </React.Fragment>
  );
}

export default Gallery;