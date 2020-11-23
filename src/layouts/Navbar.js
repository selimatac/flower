import React, { NavLink, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Navbar = () => {
  const categories = useContext(ProductContext);
  const categoryList = categories.map((x) => {
    if (x.sub_category !== null) {
      return (
        <li className="nav-item dropdown">
          <a className="nav-link pl-0" data-toggle="dropdown" href="#">
            <strong>
              <i className="fa fa-bars"></i> {x.name}
            </strong>
          </a>
          <div className="dropdown-menu">
            {x.sub_category.map((item) => {
              return (
                <NavLink
                  to={"urun/" + item.slug}
                  exact
                  className="dropdown-item"
                  key={item.id}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <NavLink className="nav-link" to={x.slug} key={x.id}>
            {x.name}
          </NavLink>
        </li>
      );
    }
  });

  return (
    <nav className="navbar navbar-main navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
          aria-controls="main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">{categoryList ? "..." : categoryList}</ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
