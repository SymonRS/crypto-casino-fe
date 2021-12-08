import { Homepage } from "../pages/Homepage/Homepage";
import { IRoute } from "./types";

export const routes: IRoute[] = [
    {
      path: "/",
      element: <Homepage/>,
      text: "Homepage"
    }/* ,
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