import Counter from "../components/Counter";

export default async function Cabins() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Cabins</h1>
        <p className="text-muted">Our current guest list.</p>
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {data.map((user: { id: number; name: string }) => (
          <li key={user.id} className="py-3 text-foreground">
            {user.name}
          </li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
