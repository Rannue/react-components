import React from 'react';

type OverlayProps = {
  onClick: React.MouseEventHandler;
};

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

export default Overlay;
