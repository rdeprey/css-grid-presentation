import React from 'react';

export const Wrapper = ({ children }) => (
    <div>
      {children}
    </div>
  );

export const SplitLayoutLeft = ({ children }) => {
  if (!children.length) {
    return children;
  }

  const rightContent = children.filter(child => {
    return child.props && (child.props.src || child.props.className === 'caption' || child.props.className === 'example');
  });

  children = children.filter(child => {
    return !rightContent.includes(child);
  });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '50% 45%',
      gridColumnGap: '5%',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {children}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {rightContent}
      </div>
    </div>
  )
};
