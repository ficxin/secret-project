import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    index: 0,
    transition: { transform: `translateX(0px)`},
    disableClick: false,
  }

  componentDidMount() {
    const carousel = document.querySelector('.carousel')
    carousel.addEventListener('transitionend', this.handleTransitionEnd)

    this.setState(() => ({ 
      carousel,
    }));
  }

  componentDidUpdate(prevProp, prevState) {
    if (!prevState.positions) {
      // Styles are not applied until current callstack is completed and delay is required to read correct styles.
      setTimeout(() => this.getSlidePositions(), 0)
    }
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
    const { index: prev, positions } = this.state;
    const index = prev - 1;
    const dist = -positions[index];

    const transition = { transform: `translateX(${dist}px)`,}

    this.setState(() => ({
      index,
      transition,
    }));
  }

  handleTransitionEnd = (ev) => {
    ev.preventDefault();

    this.setState(() => ({
      disableClick: false,
    }));
  }

  render () {
    const { artists } = this.props
    const { transition, index } = this.state

    return (
      <div className='carousel-wrapper'>
        <section className='carousel-container'>
          <div className='carousel-nav'>
            {index ?
              <div>
                <a
                  className="nav-button prev-slide"
                  onClick={() => this.prevSlide()}>
                </a>
              </div> : null}
            <div>
              <a className="nav-button next-slide"
                onClick={() => this.nextSlide()}>
              </a>
            </div>
          </div>
          <ul 
            className="carousel"
            style={transition}>
            {artists.map(({ name, thumbnail_url } ) => (
              <li key={name} className='slide'>
                <img
                  className='thumbnail'
                  src={thumbnail_url}
                  alt={name}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Carousel;
