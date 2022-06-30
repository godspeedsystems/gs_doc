import React from 'react';

export const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      fontSize: '22px',
      padding: '5px',
      cursor: 'pointer',
    }}
  >
    {children}
  </span>
);
