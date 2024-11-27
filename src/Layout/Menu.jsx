import { IoHomeOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi"; 

function Menu() {
  return (
    <ul className="menu bg-base-100 w-56 shadow-lg">
      {/* Icon of the company */}

      <h2 className="menu-title text-lg text-primary">
        Menu
      </h2>      
      <li>
        <a>
          <IoHomeOutline className="h-5 w-5" />
          Inicio
        </a>
      </li>
      <li>
        <a>
          <BsCollection className="h-5 w-5" />
          Productos
        </a>
      </li>
      <li>
        <a>
          <GrUserWorker className="h-5 w-5" />
          Empleados
        </a>
      </li>
      <li>
        <a>
          <FiShoppingCart className="h-5 w-5" />
          Ventas
        </a>
      </li>
    </ul>
  );
}

export default Menu;
