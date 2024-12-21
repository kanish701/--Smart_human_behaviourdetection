import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/home'; 
import Falldetection from '../pages/falldetection';
import Objectdetection from '../pages/objectdetection';
import Socialdistancing from '../pages/socialdistancing';
import Vehiclecrashdetection from '../pages/vehiclecrashdetection';

const router = createBrowserRouter([
  {
    path: "*", // This will match all paths
    element: <App />, // Main app component
    children: [
      {
        path: "", // Root path
        element: <Home /> // Home component
      },
      {
        path: "falldetection", // Path for fall detection page
        element: <Falldetection /> // Fall detection component
      },
      {
        path: "objectdetection", // Path for object detection page
        element: <Objectdetection /> // Object detection component
      },
      {
        path: "socialdistancing", // Path for social distancing page
        element: <Socialdistancing /> // Social distancing component
      },
      {
        path: "vehiclecrashdetection", // Path for vehicle crash detection page
        element: <Vehiclecrashdetection /> // Vehicle crash detection component
      }
    ]
  }
]);

export default router;