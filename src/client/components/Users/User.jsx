import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ item }) => (
  <div className="user" key={item.id}>
    <Link to={`/users/${item.id}`}>{item.name}</Link>
  </div>
);

export default User;