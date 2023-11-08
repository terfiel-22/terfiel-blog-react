import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainRoute from "./routes/main-route/main-route.component";
const Home = lazy(() => import("./routes/home/home.component"));
import { GlobalStyles } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
