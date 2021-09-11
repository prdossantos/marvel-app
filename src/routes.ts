import { lazy } from "react"

const CharactersPage = lazy(() => import("./pages/Characters.page"))
const CharacterPage = lazy(() => import("./pages/Character.page"))

export const routes = [
    { name: "Characters", exact: true, path: "/characters", component: CharactersPage },
    { name: "Character", exact: true, path: "/character/:id", component: CharacterPage },
]
