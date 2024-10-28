import i1 from '../assets/images/bed-4416515_1280.jpg';
import i2 from '../assets/images/breakfast-4394771_1280.jpg';
import i3 from '../assets/images/resort-4369984_1280.jpg';

function Slides() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={i1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={i2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={i3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slides;
