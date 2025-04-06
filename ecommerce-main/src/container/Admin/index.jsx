import { useSetRecoilState } from "recoil";
import "./admin.css";
import { userDetailsState } from "../../recoil/storeUserDetails";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const Admin = () => {
  const setUserDetails = useSetRecoilState(userDetailsState);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userDetails"));
    if (user) {
      setUserDetails(user);
    } else {
      setUserDetails(null);
    }
  }, []);
  return (
    <div className="container admin-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Administracion
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="create"
                >
                  Crear producto
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="delete"
                >
                  Eliminar producto
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="edit">
                  Editar producto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="orders">
                  ver pedidos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Admin;
