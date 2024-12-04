import Navbar from "../../Layout/Navbar";
import Tomate from "../../assets/tomate.webp";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import contextDataAuth from "../../Context/Auth/ContextDataAuth";

const signupVs = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string().email('El correo debe ser un email').required('El correo es requerido'),
  password: yup.string().required('La contraseña es requerida')
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupVs),
  });

  const { registerUser, error } = useContext(contextDataAuth);

  useEffect(() => {
    if (error) {
      const toast = document.getElementById('error-toast');
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  }, [error]);

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <div>
      {error && (
        <div
          id="error-toast"
          className="toast toast-top toast-end top-4 right-4 z-50"
        >
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        </div>
      )}
      <Navbar />
      <div className="bg-base-200 min-h-screen flex items-center justify-center">
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
                <label
                  className={`input input-bordered flex items-center gap-2 ${
                    errors.name ? "input-error" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="grow"
                    {...register("name")}
                  />
                </label>
                {errors.name && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  </label>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Correo</span>
                </label>
                <label
                  className={`input input-bordered flex items-center gap-2 ${
                    errors.email ? "input-error" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="grow"
                    {...register("email")}
                  />
                </label>
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  </label>
                )}
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <label
                  className={`input input-bordered flex items-center gap-2 ${
                    errors.password ? "input-error" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="grow"
                    {...register("password")}
                  />
                </label>
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  </label>
                )}
              </div>
              <div className="form-control">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Registrarse
                </button>
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