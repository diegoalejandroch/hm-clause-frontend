import {useState} from "react";
import PropTypes from 'prop-types';
import contextDataAuth from "./ContextDataAuth";
import authService from "../../services/authService";

function AuthProvider(props) {
  const { children } = props;
  const [userLogged, setUserLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (credentials) => {
    console.log(credentials);
    authService.login(credentials)
      .then((response) => {
        console.log(response);
        setUserLogged(true);
        setUser(response);
        setError(null);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        setError(error.message || 'Credenciales inválidas');
      });
  };

  const logout = () => {
    authService.logout()
      .then(() => {
        setUserLogged(false);
        setUser(null);
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

  const registerUser = (userData) => {
    authService.register(userData)
      .then((response) => {
        // redirigir a login
        console.log(response);
        setError(null);
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        setError(error.error || 'Error al registrar usuario');
      });
  }

  return (
    <contextDataAuth.Provider value={{ userLogged, login, logout, error, registerUser, user }}>
      {children}
    </contextDataAuth.Provider>

  )
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;