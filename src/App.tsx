import { Suspense } from "react";
import { createBrowserHistory } from 'history';
import { Redirect, Route, Router, Switch } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from "./components/Loader";
import { routes } from "./routes";

export const browserHistory = createBrowserHistory({
    basename: '',
    forceRefresh: false
})

const App = () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <Router history={browserHistory}>
                <Suspense fallback={<Loader isPageLoader={true} isActive={true} />}>
                    <Switch>
                        {routes.map(route =><Route key={route.name} path={route.path} exact={route.exact} component={route.component} />)}
                        <Route path="*">
                            <Redirect to="/characters" />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
