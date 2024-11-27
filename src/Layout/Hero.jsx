import Agricultor from "../assets/agricultor.jpg";
import PropTypes from 'prop-types';

function Hero({ scrollToForm }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${Agricultor})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">HM Clause</h1>
          <p className="mb-5">
            Empresa líder en la producción de semillas, con mucho amor y pasión
          </p>
          <button className="btn btn-primary" onClick={scrollToForm}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
Hero.propTypes = {
  scrollToForm: PropTypes.func.isRequired,
};

export default Hero;
