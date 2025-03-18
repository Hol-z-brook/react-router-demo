import { Outlet, Link } from "react-router";


export default function UsersLayout() {
    return (
        <div className="flex flex-col gap-6">
            <header className="bg-blue-600 text-white py-4 text-center shadow-md">
                <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
                <h1 className="text-2xl font-semibold">Users</h1>
            </header>
            <Outlet />
        </div>
    );
}