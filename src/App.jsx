import SodaProducts, {
  loader as sodaProductsLoader,
} from "./components/Sodas/SodaProducts"
import Home from "./components/Home/Home"
import CustomSodas, {
  loader as customSodaLoader,
} from "./components/Sodas/CustomSoda"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/Layout/Root"
import SodaDetail, {
  loader as sodaDetailLoader,
} from "./components/Sodas/SodaDetail"
import ErrorPage from "./components/UserFeedback/ErrorPage"
import OrderSummary, {
  loader as orderSummaryLoader,
} from "./components/Checkout/OrderSummary"
import OrderConformation, {
  loader as orderConformationsLoader,
} from "./components/Checkout/OrderComformation"
import ReviewPage, {
  loader as reviewPageLoader,
} from "./components/Reviews/ReviewPage"
import AddReviewPage, {
  loader as addReviewLoader,
} from "./components/Reviews/AddReviewPage"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "products",
          element: <SodaProducts />,
          loader: sodaProductsLoader,
        },
        {
          path: "products/:id",
          element: <SodaDetail />,
          loader: sodaDetailLoader,
        },
        {
          path: "products/custom",
          element: <CustomSodas />,
          loader: customSodaLoader,
        },
        {
          path: "order",
          element: <OrderSummary />,
          loader: orderSummaryLoader,
        },
        {
          path: "confirm/:id",
          element: <OrderConformation />,
          loader: orderConformationsLoader,
        },
        {
          path: "reviews",
          element: <ReviewPage />,
          loader: reviewPageLoader,
        },
        {
          path: "reviews/add",
          element: <AddReviewPage />,
          loader: addReviewLoader,
        },
      ],
    },
  ],
  { basename: "/poppin-soda" }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
// https://stackoverflow.com/questions/59076687/how-can-i-deploy-react-app-on-github-pages
