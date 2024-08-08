import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Router from "@/router";
import AppHeader from "@/components/app-header/AppHeader";
import AppFooter from "@/components/app-footer/AppFooter";

function App() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={""}>
        <div className="main">{useRoutes(Router)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
}

export default App;
