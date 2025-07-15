export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-solid"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}