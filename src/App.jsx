import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Design from "./pages/design";
import Orders from "./pages/orders";
import AppLayout from "./components/ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Design /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
