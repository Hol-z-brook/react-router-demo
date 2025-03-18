import { getUser, type User } from "~/api/models/user";
import type { Route } from "./+types/[id]";

export async function loader({ params }: Route.LoaderArgs): Promise<{ user: User }> {
    if (!params.id) {
        throw new Response("User ID is required", { status: 400 });
    }

    const user = await getUser(params.id);
    
    if (!user) {
        throw new Response("User not found", { status: 404 });
    }

    return { user };
}

export default function UserIndex({ loaderData }: Route.ComponentProps) {
    return (        
        <div>
            <h1>User</h1>
            <p>User Name: {loaderData?.user?.name}</p>
        </div>
    );
}