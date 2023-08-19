import Link from "next/link";

export default async function Index() {
  return (
    <>
      <h1>
        Next.js + TypeScript + Tailwind CSS + TRPC + Drizzle ORM + Neon Postgres
      </h1>
      <h3>Showcase Pages</h3>
      <ul
        style={{
          listStyle: "disc",
          listStylePosition: "inside",
          padding: 0,
        }}
      >
        <li>
          <Link
            href="/rsc"
            style={{
              color: "hsla(210, 16%, 80%, 1)",
            }}
          >
            React Server Components
          </Link>
        </li>
        <li>
          <Link
            href="/client"
            style={{
              color: "hsla(210, 16%, 80%, 1)",
            }}
          >
            Client Side Data Fetching
          </Link>
        </li>
        <li>
          <Link
            href="/server-action"
            style={{
              color: "hsla(210, 16%, 80%, 1)",
            }}
          >
            Server Action
          </Link>
        </li>

        <li>
          <Link
            href="/post-example"
            style={{
              color: "hsla(210, 16%, 80%, 1)",
            }}
          >
            Full stack Post Example
          </Link>
        </li>
      </ul>
    </>
  );
}
