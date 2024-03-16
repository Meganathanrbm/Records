import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenseLayout;
