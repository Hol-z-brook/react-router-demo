import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/todos", "routes/todos/todos.tsx", [
        index("routes/todos/index.tsx"),
    ]),
    layout("routes/users/layout.tsx", [
        route("/users", "routes/users/route.tsx", [
            index("routes/users/index.tsx"),
            route("add", "routes/users/add.tsx"),
            route(":id", "routes/users/[id].tsx"),
        ]),
    ]),
] satisfies RouteConfig;
