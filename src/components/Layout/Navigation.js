import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
