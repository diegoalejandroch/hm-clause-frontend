import NavbarHome from "../../Layout/NavbarHome";
import Menu from "../../Layout/Menu";
function Home() {
  return (
    <>
      <NavbarHome />
      <div className="container bg-base-200 flex flex-row min-h-screen">
        <Menu />
        <div className="container mx-auto">
          <h1 className="text-3xl text-center">Home</h1>
          <p className="text-center">This is the Home page</p>
        </div>
      </div>
    </>
  );
}

export default Home;
