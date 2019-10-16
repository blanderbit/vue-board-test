import HomePage from "../page/HomePage";
import ActionBoard from "../page/ActionBoard";
import BoredData from "../page/BoredData";

export const routes = [
    { path: '/', redirect: '/home' },
    { path: '*', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/bored', component: ActionBoard },
    { path: '/bored/:action', component: BoredData },
    { path: '/bored/:action', component: BoredData }
];
