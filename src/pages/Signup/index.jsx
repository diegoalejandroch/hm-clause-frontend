import Navbar from "../../Layout/Navbar";
import Tomate from "../../assets/tomate.webp";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div  className="bg-base-200 min-h-screen flex items-center justify-center">
        <div className="static card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
          <figure className="lg:w-1/2">
            <img
              src={Tomate}
              alt="Random image"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl font-bold mb-6">
              HM Clause Signup
            </h2>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input type="text" placeholder="Nombre" className="input input-bordered" />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Correo</span>
                </label>
                <input type="email" placeholder="Correo" className="input input-bordered" />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input type="password" placeholder="Contraseña" className="input input-bordered" />
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center">
              <p>¿Ya tienes una cuenta?</p>
              <Link to="/login" className="link link-primary">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


//