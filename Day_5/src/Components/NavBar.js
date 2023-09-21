import React, { useState } from "react";
import { Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../redux/userSlice';

export default function SideBar() {
  const [showBasic, setShowBasic] = useState(false);
  const Email = useSelector(selectUser);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(logout());
    nav("/");
  };

  const HandleNav = (param) => {
    nav(`${param}`);
  };

  const HandleLogin = () => {
    if (Email.email) {
      return (
        <>
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={()=>HandleNav("/profile")}>
              Profile
            </button>
          </div>
          <br />
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={HandleLogout}>
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="nav-item">
          <button className="nav-link btn btn-link" onClick={()=>HandleNav("/login")}>
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <nav className="sidebar bg-dark" style={{"color":"white"}}>
        <div className="sidebar-header">
          <h3>SportsZ</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <p className="" onClick={()=>HandleNav("/")}>
              Home
            </p>
          </li>
          <li>
            <p  className="">
            Categories
            </p>
          </li>
          <li>
            <p className="" onClick={()=>HandleNav("/")}>
              Deals
            </p>
          </li>
          {HandleLogin()}
        </ul>
      </nav>

      <div className="content">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}