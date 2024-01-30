import { Routes as RoutesReact, Route } from "react-router-dom";
import links from "../../shared/links";
import PortfolioPage from "../PortfolioPage";
import ProfilePage from "../ProfilePage";
import MyPostsPage from "../MyPostsPage";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";

const Routes = ({user, setUser}) => {
    return <RoutesReact>
        {
            links.map(l => <Route path={l.url} Component={l.component} key={l.name} user={user} setUser={setUser} />)
        }
        <Route path="/portfolio" Component={PortfolioPage} user={user} setUser={setUser}/>
        <Route path="/profile" Component={ProfilePage} user={user} setUser={setUser}/>
        <Route path="/myposts" Component={MyPostsPage} user={user} setUser={setUser}/>
        <Route path="/sign_in" Component={SignInPage} user={user} setUser={setUser}/>
        <Route path="/sign_up" Component={SignUpPage} user={user} setUser={setUser}/>
    </RoutesReact>
}

export default Routes