import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ route, text }) => (
  <span>
    <Link to={route}>
      <button>
        {text}
      </button>
    </Link>
  </span>
);

export default Button;
