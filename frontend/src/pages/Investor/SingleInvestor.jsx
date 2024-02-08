import { Button } from "@/components/ui/button";
import React from "react";

const SingleInvestor = () => {
  return (
    <div className="dark bg-gray-950 w-full py-12">
      <div className="container grid md:gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-2 min-[400px]:grid md:gap-4 lg:grid-cols-2 xl:gap-8">
          <div className="mx-auto flex items-center justify-center rounded-lg overflow-hidden border border-gray-200 border-gray-200 bg-white shadow-sm w-full max-w-sm md:max-w-md lg:max-w-sm lg:border-0 lg:rounded-tl-lg lg:rounded-bl-lg dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Image"
              className="w-full h-full object-cover"
              height="300"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 p-4 md:p-8">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl text-gray-50">
              Acme Inc
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By Jane Doe · 2 days ago
            </p>
            <p className="text-base leading-loose text-gray-600 md:text-xl dark:text-gray-400">
              Description of the startup goes here. It can be a longer
              description of the startup and what they do. It should be
              descriptive and engaging.
            </p>
            <div className="mt-auto">
              <Button size="lg">Connect</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInvestor;
