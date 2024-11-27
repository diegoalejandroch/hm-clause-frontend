import {useState} from "react";
import PropTypes from 'prop-types';
import contextDataAuth from "./ContextDataAuth";

function AuthProvider(props) {
  const { children } = props;
  const [userLogged, setUserLogged] = useState(false);

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

export default AuthProvider;