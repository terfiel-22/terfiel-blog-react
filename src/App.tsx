import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
const MainRoute = lazy(() => import("./routes/main-route/main-route.component"));
import { GlobalStyles } from "./global.styles";
import {Home} from "./routes/home/home.component";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
