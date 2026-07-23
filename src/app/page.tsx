// This is the landing page (the "/" route).
// For Commit 1 it's a simple placeholder so we can confirm the app runs.
// Later commits will replace this with the real header, content, and footer.
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-bold text-gov-navy sm:text-4xl">
        VAHAN 4.0 — Citizen Services
      </h1>
      <p className="max-w-md text-gray-600">
        Project scaffold is working. Header, dropdowns, multilingual content,
        and footer are coming in the next commits.
      </p>
      <span className="rounded-full bg-gov-navy px-4 py-1 text-sm text-white">
        Commit 1 ✓ Scaffold ready
      </span>
    </main>
  );
}
