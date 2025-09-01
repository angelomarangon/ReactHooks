import { RouterProvider } from "react-router"
import { appRouter } from "./src/router/app.router"


export const HeroesApp = () => {
    return (
        <>
            <RouterProvider router={ appRouter } />
        </>
    )
}
