import type { Route } from "./+types/index";
import { Link } from "react-router";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - React Router App" },
    { name: "description", content: "Explore the app's features with ease." },
  ];
}

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="w-full max-w-3xl p-6 flex flex-col items-center gap-12 text-center">
        
        <motion.header 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">Welcome!</h1>
          <p className="text-lg text-gray-600">
            This is a demo app for React Router v7.
          </p>
        </motion.header>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {[
            { path: "/todos", label: "Todos" },
            { path: "/users", label: "Users" },
            { path: "/user", label: "User" },
          ].map(({ path, label }) => (
            <Link 
              key={path} 
              to={path} 
              className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <span className="text-xl font-semibold">{label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}