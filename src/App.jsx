import Routers from "./router";
import { AuthProvider } from "./context/AuthProvider";

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
