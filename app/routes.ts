import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/todos", "routes/todos/todos.tsx", [
        index("routes/todos/index.tsx"),
    ]),
    route("/user", "routes/user/user.tsx", [
        index("routes/user/index.tsx"),
    ]),
    route("/users", "routes/users/users.tsx", [
        index("routes/users/index.tsx"),
    ]),
] satisfies RouteConfig;
