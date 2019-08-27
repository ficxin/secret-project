import React, { Component } from 'react';
import Carousel from './Carousel';
import { getFeaturedArtists } from '../utils/api'

class Home extends Component {
  state = {
    artists: []
  }
  
  componentDidMount() {
    const featuredArtists = getFeaturedArtists();
    this.setFeaturedArtists(featuredArtists);
  }

  setFeaturedArtists = (artists) => {
    this.setState(() => ({ artists }));
  }

  render () {
    const { artists } = this.state
    return (
      <React.Fragment>
        <header>mirum gallery</header>
        <Carousel artists={artists}/>
      </React.Fragment>
    );
  }
}

export default Home;
