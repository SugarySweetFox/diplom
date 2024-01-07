import { Routes as RoutesReact, Route } from "react-router-dom";
import links from "../../shared/links";

const Routes = () => {
    return <RoutesReact>
        {
            links.map(l => <Route path={l.url} Component={l.component} key={l.name} />)
        }

    </RoutesReact>
}

export default Routes