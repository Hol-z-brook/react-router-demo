import { Link } from "react-router";
import { getUsers, type User } from "~/api/models";
import type { Route } from "./+types/index";

export async function loader({}: Route.LoaderArgs) {
  const users = await getUsers();

  if (!users) {
    throw new Response("Users not found", { status: 404 });
  }

  return { users };
}

export default function UsersPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-6">
      <Link to="/users/add" className="text-blue-500 hover:underline">
        Add a user
      </Link>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {loaderData.users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="block p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <UserCard user={user} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserCard({ user }: { user: User }) {
  return <div className="text-lg font-medium">{user.name}</div>;
}
