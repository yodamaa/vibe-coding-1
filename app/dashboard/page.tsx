import LayoutDashboard from "../../components/ui/LayoutDashboard";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

export default async function DashboardPage() {
  // For now, static sample data. Later connect to API/lib/db.
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  return (
    <LayoutDashboard>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Badge>Beta</Badge>
          <Button>New Project</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold">Users</h3>
          <p className="text-3xl mt-2">{users.length}</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Active</h3>
          <p className="text-3xl mt-2">12</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl mt-2">$4,200</p>
        </Card>
      </div>

      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Recent Users</h2>
        <div className="space-y-2">
          {users.map((u) => (
            <div key={u.id} className="flex items-center justify-between rounded border p-3 bg-white/50">
              <div>{u.name}</div>
              <div className="text-sm text-gray-600">View</div>
            </div>
          ))}
        </div>
      </section>
    </LayoutDashboard>
  );
}
