import { Skeleton } from "./ui/skeleton";


const MovieDetailSkeleton = () => (
  <div className="container mx-auto px-4 py-10 max-w-6xl flex flex-col md:flex-row gap-10">
    <Skeleton className="w-full md:w-1/3 h-[450px] rounded-xl" />
    <div className="flex-1 space-y-4">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  </div>
);

export default MovieDetailSkeleton;
