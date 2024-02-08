import React from "react";
import { Link } from "react-router-dom";

const InvestorHome = () => {
  return (
    <div>
      {" "}
      <div className="w-full py-12">
        <div className="container grid max-w-5xl items-start justify-center gap-4 px-4 md:px-6 lg:gap-8 xl:gap-10 xl:max-w-6xl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Startups
            </h1>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-start gap-1">
              <Link className="font-semibold" to={"/single-startup"}>
                <div className="font-semibold">Acme</div>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John Doe
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Making the best widgets in the world.
              </p>
            </div>
            <div className="flex items-start justify-end">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-startup"}
              >
                View
              </Link>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Link className="font-semibold" to={"/single-startup"}>
                <div className="font-semibold">Bolt</div>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane Smith
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The future of transportation.
              </p>
            </div>
            <div className="flex items-start justify-end">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-startup"}
              >
                View
              </Link>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Link className="font-semibold" to={"/single-startup"}>
                <div className="font-semibold">Cubix</div>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Eva Johnson
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Revolutionizing the music industry.
              </p>
            </div>
            <div className="flex items-start justify-end">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-startup"}
              >
                View
              </Link>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Link className="font-semibold" to={"/single-startup"}>
                <div className="font-semibold">DigiMart</div>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Alex Brown
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your one-stop shop for everything.
              </p>
            </div>
            <div className="flex items-start justify-end">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-startup"}
              >
                View
              </Link>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Link className="font-semibold" to={"/single-startup"}>
                <div className="font-semibold">EcoNow</div>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sophia Lee
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Saving the planet, one step at a time.
              </p>
            </div>
            <div className="flex items-start justify-end">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-startup"}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHome;
