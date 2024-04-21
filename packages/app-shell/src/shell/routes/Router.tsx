import { Route, Routes } from "react-router-dom";
import React from "react";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                Hello!
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};
