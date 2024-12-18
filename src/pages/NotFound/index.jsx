
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4">Página no encontrada</p>
      <Link to="/" className="btn btn-primary mt-6">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
