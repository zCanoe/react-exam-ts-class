import React, { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import Router from "@/router";

function App() {
  return (
    <div>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to={"/focus"}>关注</Link>
        <Link to={"/download"}>下载客户端</Link>
      </div>
      <Suspense fallback={""}>
        <div className="main">{useRoutes(Router)}</div>
      </Suspense>
    </div>
  );
}

export default App;
