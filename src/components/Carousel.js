import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import PropTypes from 'prop-types';

class Carousel extends Component {
  static propTypes = {
    artists: PropTypes.array.isRequired
  }

  state = {
    index: 0,
    transition: { transform: `translateX(0px)`},
    disableClick: false,
    imagesLoaded: 0,
  }

  componentDidMount() {
    const carousel = document.querySelector('.carousel')
    carousel.addEventListener('transitionend', this.handleTransitionEnd, false);
    window.addEventListener('resize', this.resetCarousel, false);

    this.setState(() => ({ 
      carousel,
    }));
  }

  componentDidUpdate({ artists }, prevState) {
    if (prevState.imagesLoaded !== this.state.imagesLoaded && artists.length === this.state.imagesLoaded) {
      this.getSlidePositions();
    }
  }

  componentWillUnmount() {
    this.state.carousel.removeEventListener('transitionend', this.handleTransitionEnd, false);
    window.removeEventListener('resize', this.resetCarousel, false);
  }

  getSlidePositions = () => {
    const slides = document.querySelectorAll('.slide');
    const positions =  Array.prototype.map.call(slides, slide => slide.offsetLeft);

    this.setState(() => ({
      positions,
      slides,
    }))
  }

  updateSlide = (direction) => {
    const { index: prev, positions, slides, disableClick } = this.state;
    if (disableClick || !positions) return;
    const index = (prev + direction) % slides.length;
    const dist = -positions[index];
    const transition = { transform: `translateX(${dist}px)`,}

    this.setState(() => ({
      index,
      transition,
      disableClick: true,
    }));
  }

  handleTransitionEnd = () => {
    this.setState(() => ({
      disableClick: false,
    }));
  }

  resetCarousel = () => {
    const { index } = this.state;
    const desktopBreakPoint = 768;

    if (window.innerWidth < desktopBreakPoint && index) {
      this.setState(() => ({
        index: 0,
        transition: { transform: `translateX(0px)`},
      }));
    }
  }

  render () {
    const { artists } = this.props
    const { transition, index } = this.state

    return (
      <div className='carousel-wrapper'>
        <section className='carousel-container'>
          <div className='carousel-nav' >
            {index ?
              <button
                className='nav-button prev-slide'
                onClick={() => this.updateSlide(-1)}>
                  <span>&#9001;</span>
              </button> 
            : null}
            <button
              className='nav-button next-slide'
              onClick={() => this.updateSlide(1)}>
                <span>&#9002;</span>
            </button>
          </div>
          <ul 
            className='carousel'
            style={transition}>
            {artists.map(({ name, thumbnail }) => {
              const path = name.replace(/\s/g, '').toLowerCase();
              const [thumbnail_url, exhibit] = thumbnail
              return (
                <li key={name} className='slide'>
                  <Link to={`/gallery/${path}`}>
                    <img
                      className='thumbnail'
                      src={thumbnail_url}
                      alt={name}
                      onLoad={() => this.setState(({ imagesLoaded }) => ({ imagesLoaded: ++imagesLoaded }))}
                    />
                  </Link>
                  <div className='exhibit-info'>
                    <p className='artist-name'>{name}</p>
                    <p className='exhibit-name'>{exhibit}</p>
                  </div>
                </li>
              )}
            )}
          </ul>
        </section>
        <Route path='/gallery/:id' component={Gallery} />
      </div>
    );
  }
}

export default Carousel;
