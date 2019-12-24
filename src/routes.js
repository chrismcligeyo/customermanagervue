import Customers from "./components/Customers";
import About from "./components/About";
import Add from "./components/Add";
import CustomerDetails from "./components/CustomerDetails";
import Edit from "./components/Edit";

export const routes = [
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: Edit},


]
