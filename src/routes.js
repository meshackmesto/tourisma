import App from "./pages/App";
import TravelForm from "./pages/TravelForm";
import FavoriteCityDisplay from "./pages/FavoriteCityDisplay";
import Login from "./pages/LogIn";
import CityList from "./components/CityList";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CityList />,
      },
      {
        path: "/TravelForm",
        element: <TravelForm />,
      },
      {
        path: "/favouriteCityDisplay",
        element: <FavoriteCityDisplay />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
