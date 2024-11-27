import Routers from "./router";
import AuthProvider from "./Context/Auth/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </>
  )
}

export default App
