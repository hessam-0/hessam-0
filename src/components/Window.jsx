import React from 'react';
import Draggable from 'react-draggable';

export const Window = ({ children, title, onClose, ...props }) => {
  return (
    <Draggable handle=".window-title" bounds="parent">
      <div className="window absolute" {...props}>
        <div className="window-title">
          <span>{title}</span>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  );
};
