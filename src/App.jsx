import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Cart, Category, Confirmation } from 'components/pages';
import { whiteLabel } from 'themes';
import { ThemeProvider } from 'styled-components';

const displayName = 'App';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Sports store',
};

export default function App({ title }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={whiteLabel}>
        <BrowserRouter>
          <Switch>
            {/* these are good */}
            <Route exact path="/" component={Category} />
            <Route
              path="/cart"
              render={props => <Cart {...props} />}
            />

            <Route
              path="/confirmation"
              component={props => <Confirmation {...props} extra={title} />}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>

    </Provider>

  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
