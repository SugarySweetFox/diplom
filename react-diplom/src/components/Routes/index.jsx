import { Routes as RoutesReact, Route } from "react-router-dom";
import links from "../../shared/links";
import PortfolioPage from "../PortfolioPage";
import ProfilePage from "../ProfilePage";

const Routes = () => {
    return <RoutesReact>
        {
            links.map(l => <Route path={l.url} Component={l.component} key={l.name} />)
        }
        <Route path="/portfolio" Component={PortfolioPage}/>
        <Route path="/profile" Component={ProfilePage}/>
    </RoutesReact>
}

export default Routes