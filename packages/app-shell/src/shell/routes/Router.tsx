import React from "react";
import { Route, Routes } from "react-router-dom";
const Header = React.lazy(() => import("kspr_dev_header/Header"));
const Articles = React.lazy(() => import("kspr_dev_articles/Articles"));
const Projects = React.lazy(() => import("kspr_dev_projects/Projects"));

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Header />
                <Articles />
                <Projects />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};
