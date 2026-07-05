export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Consentia
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Patient-consent and intake automation for clinics via WhatsApp.
            </p>
          </div>

          <div className="mt-10 w-full max-w-lg">
            <div className="overflow-hidden rounded-2xl bg-white/[0.05] shadow-xl ring-1 ring-white/[0.1]">
              <div className="p-8">
                <p className="text-sm text-zinc-400">
                  Start building your app by editing{" "}
                  <code className="rounded bg-white/[0.1] px-2 py-1 text-sm text-white">
                    src/app/page.tsx
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
