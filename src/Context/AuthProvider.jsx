import {useState, createContext } from "react";
import PropTypes from 'prop-types';

const contextDataAuth = createContext();

function AuthProvider(props) {
  const { children } = props;
  const [userLogged, setUserLogged] = useState(true);

  const login = () => setUserLogged(true);
  const logout = () => setUserLogged(false);

  return (

    <contextDataAuth.Provider value={{ userLogged, login, logout }}>
      {children}
    </contextDataAuth.Provider>

  )
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  AuthProvider,
  contextDataAuth
}