import { Homepage } from "../pages/Homepage/Homepage";
import Signup from "../pages/SignUp/Signup";
import { IRoute } from "./types";

export const routes: IRoute[] = [
    {
      path: "/",
      element: <Homepage />,
      text: "Homepage"
    },
    {
      path: "/signup",
      element: <Signup />,
      text: "Register"
    }
    /* ,
    {
      path: "/test",
      element: <AnotherComponent/>
    } */
    /* {
      path: "/tacos",
      component: Tacos,
      routes: [
        {
          path: "/tacos/bus",
          component: Bus
        },
        {
          path: "/tacos/cart",
          component: Cart
        }
      ]
    } */
  ];