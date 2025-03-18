import { Form, redirect } from "react-router";
import type { Route } from "./+types/add.js";
import { addUser } from "~/api/models/user";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString().trim();

  if (!name) {
    return { error: "Name is required" };
  }

  const userId = await addUser({ name });
  return redirect(`/user/${userId}`);
}

export default function AddUserPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      {/* Page Card */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Add a New User</h1>

        {/* User Form */}
        <Form method="post" className="flex flex-col gap-4">
          <input 
            name="name" 
            type="text" 
            placeholder="Enter user name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </Form>

        {/* Error Message */}
        {actionData?.error && (
          <p className="text-red-500 text-sm mt-4 text-center">{actionData.error}</p>
        )}
      </div>
    </div>
  );
}
