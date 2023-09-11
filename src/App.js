import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { ContextApi } from "./components/Context/ContextApi";
const Home = lazy(() => import("./components/home/Home"));
const SearchResults = lazy(() => import("./components/results/SearchResults"));

function App() {
  const ctx = useContext(ContextApi);
  const theme = ctx.theme;

  return (
    <div className={theme ? "dark" : ""}>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<h2 className="text-center font-mono">Loading...</h2>}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/:query/:startIndex">
          <Suspense fallback={<h2 className="text-center font-mono">Loading...</h2>}>
            <SearchResults />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
