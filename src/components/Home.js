import React, { Component } from 'react';
import Carousel from './Carousel';
import { getFeaturedArtists } from '../utils/api'
import { Link } from "react-router-dom";

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
        <Link to={'/'}><header>mirum moma</header></Link>
        <Carousel artists={artists} />
      </React.Fragment>
    );
  }
}

export default Home;
