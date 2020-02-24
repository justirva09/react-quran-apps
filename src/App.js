import {React, BrowserRouter, Route, Switch} from 'libraries';
import routes from 'routes';
import { NotFound404 } from 'pages';
import {Provider} from 'react-redux';
import { store } from 'config';
const App = (props) => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} component={routerProps => (
          <route.component {...routerProps} {...props} />
        )}
        exact
        />
      ))}
      <Route component={NotFound404} {...props} />
    </Switch>
  </BrowserRouter>
);

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)



export default MainApp;
