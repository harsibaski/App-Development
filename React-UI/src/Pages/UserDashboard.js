import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const user=useSelector(selectUser)
  const nav=useNavigate()
  const handleCartbtn=()=>{
    nav("/cart")
  }
  return (
    <div className="container mt-5">
      <div className="row"> 
        <div className="col-md-9">
          <h2>Welcome {user.email} to your profile</h2>
        </div>
      </div>
      <br />
      <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Cart</h5>
                  <p className="card-text">View and manage your orders.</p>
                  <button className="btn btn-primary" onClick={handleCartbtn}>Go to cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Edit Profile</h5>
                  <p className="card-text">Edit your profile information.</p>
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Subscription Details</h5>
                  <p className="card-text">Manage your subscription details.</p>
                  <button className="btn btn-primary">Manage Subscription</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default UserDashboard;