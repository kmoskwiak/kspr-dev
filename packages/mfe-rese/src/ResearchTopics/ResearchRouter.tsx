import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "../CategoryPage/index.tsx";
import { ResearchTopics } from "./ResearchTopics.tsx";

const LoadingSpinner = () => {
    return <div>Loading...</div>;
};

export const ResearchRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div>
                                <Suspense fallback={<LoadingSpinner />}>
                                    <ResearchTopics />
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
                                    <CategoryPage />
                                </Suspense>
                            </div>
                        </>
                    }
                />
            </Routes>
        </>
    );
}

