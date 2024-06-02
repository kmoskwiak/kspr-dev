import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Header = React.lazy(() => import("kspr_dev_header/Header"));
const LastArticle = React.lazy(() => import("kspr_dev_articles/LastArticle"));
const Articles = React.lazy(() => import("kspr_dev_articles/Articles"));
const Projects = React.lazy(() => import("kspr_dev_projects/Projects"));
const CurrentlyWorkingOn = React.lazy(() => import("kspr_dev_projects/CurrentlyWorkingOn"));
const Footer = React.lazy(() => import("kspr_dev_footer/Footer"));

const LoadingSpinner = () => {
  return <div>Loading...</div>;
};

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <Header />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <LastArticle />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <CurrentlyWorkingOn />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </div>
            </>
          }
        />
        <Route
          path="/articles"
          element={
            <>
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <Header />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Articles />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </div>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <Header />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};
