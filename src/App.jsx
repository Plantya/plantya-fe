import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes/Index";
import AuthLayout from "./layout/AuthLayout";
import NonAuthLayout from "./layout/NonAuthLayout";
import AuthMiddleware from "./routes/AuthMiddleware";
import PropTypes from 'prop-types';

const App = (props) => {

  return (
    <Routes>
      {publicRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <NonAuthLayout mode={props.mode} toggleTheme={props.toggleTheme}>
              {route.component}
            </NonAuthLayout>
          }
        />
      ))}

      {
        authProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <AuthMiddleware>
                <AuthLayout>{route.component}</AuthLayout>
              </AuthMiddleware>
            }
          />
        ))
      }
    </Routes >
  );
};

App.propTypes = {
  mode: PropTypes.any,
  toggleTheme: PropTypes.any,
};



export default App;
