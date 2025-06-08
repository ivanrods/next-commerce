import clsx from "clsx";
export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
  return (
    <div
      className={clsx(
        "flex flex-col shadow-lg h-96 bg-slate-800 text-gray-300 p-5",
        {
          'relative overflow-hidden before:content-[""] before:absolute before:inset-0 before:translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-gray-500/30 before:to-transparent':
            isLoading,
        }
      )}
    >
      <div className="relative max-h-72 flex-1 bg-zinc-700"></div>
      <div className="flex justify-between font-bold my-3 bg-zinc-700"></div>
      <div className="h-3 w-8/12 rounded-md bg-zinc-700"></div>
    </div>
  );
}
