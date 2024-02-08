import { Card } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'

const StartupHome = () => {
  return (
    <div><div className="w-full py-6">
    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Investors</h2>
      </div>
    </div>
  </div>
  <div className="w-full py-6">
    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <div className="flex flex-col gap-2 p-4">
            <img
              alt="Image"
              className="rounded-full m-auto"
              height="200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-xs text-gray-500">Acme Inc</p>
            </div>
            <p className="text-sm/relaxed flex-1">
              John is an experienced investor with a focus on technology startups. He has a passion for mentoring
              young entrepreneurs and helping them grow their businesses.
            </p>
            <div className="mt-auto">
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-investor"}
              >
                View Profile
              </Link>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 p-4">
            <img
              alt="Image"
              className="rounded-full m-auto"
              height="200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-semibold">Alice Johnson</h3>
              <p className="text-xs text-gray-500">Infinite Capital</p>
            </div>
            <p className="text-sm/relaxed flex-1">
              Alice is a seasoned investor with a keen interest in sustainable energy and clean technologies. She is
              known for her strategic guidance and hands-on approach to helping startups scale.
            </p>
            <div className="mt-auto">
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-investor"}
              >
                View Profile
              </Link>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 p-4">
            <img
              alt="Image"
              className="rounded-full m-auto"
              height="200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-semibold">Michael Chang</h3>
              <p className="text-xs text-gray-500">Venture Horizon</p>
            </div>
            <p className="text-sm/relaxed flex-1">
              Michael is a forward-thinking investor who seeks out opportunities in emerging markets. He has a
              strong track record of identifying disruptive innovations and nurturing them to success.
            </p>
            <div className="mt-auto">
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-investor"}
              >
                View Profile
              </Link>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-2 p-4">
            <img
              alt="Image"
              className="rounded-full m-auto"
              height="200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-semibold">Sophia Lee</h3>
              <p className="text-xs text-gray-500">Spark Capital</p>
            </div>
            <p className="text-sm/relaxed flex-1">
              Sophia is an investor with a passion for early-stage startups. She brings a wealth of experience in
              marketing and business development, helping companies reach new heights.
            </p>
            <div className="mt-auto">
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={"/single-investor"}
              >
                View Profile
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div></div>
  )
}

export default StartupHome