import React, { lazy, Suspense, suspense } from 'react';

// Lazy Function
const LazyLoadRoutes = (importFunc) => {
    const LazyElement = lazy(importFunc);

    return (
        <Suspense fallback="Loading...">
            <LazyElement />
        </Suspense>
    );
}
export default LazyLoadRoutes