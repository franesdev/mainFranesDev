export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-lime-500 animate-spin"></div>
          <div
            className="absolute top-0 left-0 h-24 w-24 rounded-full border-r-4 border-l-4 border-lime-300 animate-spin opacity-70"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
        <p className="mt-4 text-lime-500 text-xl font-light">Loading...</p>
      </div>
    </div>
  )
}
