import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container py-4">
      <h1 className="display-4">User ID: {id}</h1>
      <hr />
      <ul className="list-group  mx-auto">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Username: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
      <hr />
      <Link className="btn btn-primary" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default User;
