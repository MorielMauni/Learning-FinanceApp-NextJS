import Skeleton from "@/components/skeleton";

export default function TrendFallback() {
  return (
    <div className="space-y-5">
      <div className={`font-semibold`}>
        <Skeleton />
      </div>
      <div className="mb-2">
        <Skeleton />
      </div>
      <div className="flex space-x-2">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
