import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { getArtistExhibit } from '../utils/api'

class Display extends Component {
  state = {
    image_urls: [],
    artist_bio: '',
  }
  
  componentDidMount() {
    const { match } = this.props;
    const { image_urls, artist_bio, name }  = getArtistExhibit(match.params.id);

    this.setState(() => ({ 
      image_urls,
      artist_bio,
      name
    }));
  }

  render () {
    const { match } = this.props;
    const { image_urls, artist_bio, name } = this.state;

    return (
      <React.Fragment>
        <header>{name}</header>
        <div className='display-wrapper'>
          <section className='display-container'>
            <div className='display-main'>
              <img
                className='thumbnail'
                src={image_urls[1]}
                alt={match.params.id}
              />
            </div>
            <div className='display-selector'>
              <ul className='display-collection'>
                {image_urls.map((image_url, i) => (
                  <li key={i} className='display-item'>
                    <img
                      className='thumbnail'
                      src={image_url}
                      alt={`${match.params.id}${i}`}
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