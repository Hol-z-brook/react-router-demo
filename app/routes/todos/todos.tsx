import { Outlet } from "react-router";

export default function Todos() {
    return (
        <div>
            <h1>Todos</h1>
            <Outlet />
        </div>
    );
}