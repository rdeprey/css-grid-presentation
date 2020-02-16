import React from 'react';

export const Wrapper = ({ children }) => (
    <div>
      {children}
    </div>
  );

export const SplitLayoutLeft = ({ children }) => {
  const images = children.filter(child => {
    return child.props && child.props.src;
  });

  children = children.filter(child => {
    return !images.includes(child);
  });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '45% 45%',
      gridColumnGap: '10%',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {children}
      </div>
      <div>
        {images}
      </div>
    </div>
  )
};
