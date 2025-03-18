import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          Stuff
        </header>
        <div>
          <Link to="/todos">Todos</Link>
          <Link to="/users">Users</Link>
          <Link to="/user">User</Link>
        </div>
      </div>
    </main>
  );

}
