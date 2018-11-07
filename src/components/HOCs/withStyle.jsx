import ThemeContext from 'themes';
import React from 'react';

function withStyle(WrappedComponent, styleCreator) {
  const displayName = `WithStyle(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  function WithStyle({ style, ...rest }) {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const newStyle = { ...styleCreator(theme, rest), ...style };
          return <WrappedComponent style={newStyle} {...rest} />;
        }}
      </ThemeContext.Consumer>
    );
  }

  WithStyle.displayName = displayName;

  return WithStyle;
}

export default withStyle;
