import type { LoaderFunction } from "@remix-run/node";
import { requireAdminUser } from "~/session.server";
import { Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) =>
  await requireAdminUser(request);

export default function AdminIndexRoute() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}
