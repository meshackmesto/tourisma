import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import TravelForm from './pages/TravelForm';
import FavoriteCityDisplay from './pages/FavoriteCityDisplay';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';

const routes =[
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/TravelForm",
    element: <TravelForm />
  },
  {
    path: "/favouriteCityDisplay",
    element: <FavoriteCityDisplay />
  },
  {
    path:"/login",
    element: < Login />
  },
  {
    path:"/sign-up",
    element: <SignUp />
  }
];

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default routes;