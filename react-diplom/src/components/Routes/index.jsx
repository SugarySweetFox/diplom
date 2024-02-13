import { Routes as RoutesReact, Route } from "react-router-dom";
import links from "../../shared/links";
import PortfolioPage from "../PortfolioPage";
import ProfilePage from "../ProfilePage";
import MyPostsPage from "../MyPostsPage";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";
import LikePage from "../LikePage";
import AdminPanel from "../AdminPanel"
import AdminAllPosts from "../AdminAllPosts"
import AdminAllWorks from "../AdminAllWorks"

const Routes = ({user, setUser}) => {
    return <RoutesReact>
        {
            links.map(l => <Route path={l.url} Component={l.component} key={l.name} user={user} setUser={setUser} />)
        }
        <Route path="/portfolio" Component={PortfolioPage} user={user} setUser={setUser}/>
        <Route path="/portfolio/:userIdParams" Component={PortfolioPage} user={user} setUser={setUser}/>
        <Route path="/profile" Component={ProfilePage} user={user} setUser={setUser}/>
        <Route path="/myposts" Component={MyPostsPage} user={user} setUser={setUser}/>
        <Route path="/like" Component={LikePage} user={user} setUser={setUser}/>
        <Route path="/sign_in" Component={SignInPage} user={user} setUser={setUser}/>
        <Route path="/sign_up" Component={SignUpPage} user={user} setUser={setUser}/>
        <Route path="/admin" Component={AdminPanel} user={user}/>
        <Route path="/admin_posts" Component={AdminAllPosts} user={user}/>
        <Route path="/admin_works" Component={AdminAllWorks} user={user}/>
    </RoutesReact>
}

export default Routes