import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from './Gallery';

class Carousel extends Component {
  state = {
    index: 0,
    transition: { transform: `translateX(0px)`},
    disableClick: false,
  }

  componentDidMount() {
    const carousel = document.querySelector('.carousel')
    carousel.addEventListener('transitionend', this.handleTransitionEnd, false);
    window.addEventListener('resize', this.resetCarousel, false);

    this.setState(() => ({ 
      carousel,
    }));
  }

  componentDidUpdate(prevProp, prevState) {
    if (!prevState.positions) {
      // Styles are not applied until current callstack is completed and delay is required to read correct styles.
      setTimeout(() => this.getSlidePositions(), 100);
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
      slides,
      positions,
    }))
  }

  nextSlide = () => {
    const { index: prev, positions, slides, disableClick } = this.state;
    if (disableClick) return;

    const index = (prev + 1) % slides.length;
    const dist = -positions[index];
    const transition = { transform: `translateX(${dist}px)`,}

    this.setState(() => ({
      index,
      transition,
      disableClick: true,
    }));
  }

  prevSlide = () => {
    const { index: prev, positions, disableClick } = this.state;
    if (disableClick) return;
    const index = prev - 1;
    const dist = -positions[index];

    const transition = { transform: `translateX(${dist}px)`,}

    this.setState(() => ({
      index,
      transition,
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
          <div className='carousel-nav'>
            {index ?
              <button
                className='nav-button prev-slide'
                onClick={() => this.prevSlide()}>
                  <span>&#9001;</span>
              </button> 
            : null}
            <button
              className='nav-button next-slide'
              onClick={() => this.nextSlide()}>
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
