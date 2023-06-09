import LoadingSpinner from "./loadingSpinner";

export default function WelcomePage({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center flex-col gap-16 p-4">
      <h1 className="text-7xl font-extrabold tracking-wide">
        Welcome back, {name}
      </h1>
      <LoadingSpinner size={16} />
    </div>
  );
}
