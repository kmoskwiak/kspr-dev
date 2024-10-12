import { Theme } from "@kspr-dev/common/theme";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Header = React.lazy(() => import("kspr_dev_header/Header"));
const ReSeHeader = React.lazy(() => import("kspr_dev_header/ReSeHeader"));
const LastArticle = React.lazy(() => import("kspr_dev_articles/LastArticle"));
const SingleArticle = React.lazy(() => import("kspr_dev_articles/SingleArticle"));
const Articles = React.lazy(() => import("kspr_dev_articles/Articles"));
const Projects = React.lazy(() => import("kspr_dev_projects/Projects"));
const CurrentlyWorkingOn = React.lazy(() => import("kspr_dev_projects/CurrentlyWorkingOn"));
const Footer = React.lazy(() => import("kspr_dev_footer/Footer"));
const ResearchTopics = React.lazy(() => import("kspr_dev_rese/ResearchTopics"));

const LoadingSpinner = () => {
  return <div>Loading...</div>;
};

export const Router = () => {
  return (
    <Theme>
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
        <Route
          path="/re/se/*"
          element={
            <>
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <ReSeHeader />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <ResearchTopics />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </div>
            </>
          }
        />
        <Route
          path="/:slug"
          element={
            <>
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <Header />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <SingleArticle />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </div>
            </>
          }
        />
      </Routes>
    </Theme>
  );
};
