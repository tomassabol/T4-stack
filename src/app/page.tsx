import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const res = await serverClient.greeting.hello();
  const users = await serverClient.user.getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      {res}

      <section>
        <h1 className="text-xl font-bold">Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            {user.id} - {user.fullName}
          </div>
        ))}
      </section>
    </main>
  );
}
