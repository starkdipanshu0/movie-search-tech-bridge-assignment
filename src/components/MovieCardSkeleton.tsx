import { Skeleton } from "./ui/skeleton";


const MovieCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border p-2">
    <Skeleton className="w-full h-80 rounded-lg" />
    <div className="p-4 space-y-2">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
);

export default MovieCardSkeleton;