import { Navbar } from "../Component/Navbar";


export function Dashboard() {
  return (
    <div>
      <Navbar />
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 ">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
    </div>
  )
}