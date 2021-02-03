import Home, {Recommend, Music} from '../pages/home';
import About, { AboutCulture, AboutHisotry } from '../pages/about';
import Me from '../pages/me';

const routes = [
  {
    path: "/",
    component: Home,
    routes: [
        {
            path: "/",
            exact: true,
            component: Recommend,
        },
        {
            path: "/home/music",
            component: Music,
        }
    ]
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutCulture
      },
      {
        path: "/about/history",
        component: AboutHisotry
      }
    ]
  },
  {
    path: "/me",
    component: Me
  }
]

export default routes;