import React from 'react';
import User from './User';

const Users = ({ items }) => (
  <div className="users">
    {items.map(item => (
      <User item={item} key={item.id} />
    ))}
  </div>
);

export default Users;