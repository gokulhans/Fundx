import React from "react";
import { useQuery } from "react-query";
import axiosClient from "../../utils/axios";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StartupCard from "../../components/Cards/StartupCard";
import LandingPage from '@/components/LaningPages/LandingPage'
import React from 'react'

const Home = () => {
  return (
    <div className="m-4">
      <div className="dark:bg-[#1a252f] bg-blue-50 rounded-lg p-4 sm:p-8 text-[#2c3e50] dark:text-[#ffffff] max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <UsersIcon className="text-yellow-400 dark:text-yellow-300" />
              <p className="text-sm uppercase">
                Investors platform to fund startups
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">I am an Investor</h2>
            <p>
              Get access to thousands of verified startups to invest in & expand
              your investment portfolio.
            </p>
            <Button className="bg-[#2c3e50] hover:bg-[#1a252f] dark:bg-[#ffffff] dark:hover:bg-[#e0e0e0] text-white dark:text-[#2c3e50] w-full sm:w-auto">
              <Link to={"/investor-profile"}>Join as Investor</Link>
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <RocketIcon className="text-yellow-400 dark:text-yellow-300" />
              <p className="text-sm uppercase">Founders apply now to raise</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">I am a Startup</h2>
            <p>
              Get access to thousands of accredited investors & bring value
              added capital to your cap table.
            </p>
            <Button className="bg-[#2c3e50] hover:bg-[#1a252f] dark:bg-[#ffffff] dark:hover:bg-[#e0e0e0] text-white dark:text-[#2c3e50] w-full sm:w-auto">
              <Link to={"/startup-profile"}>Join as Startup</Link>
            </Button>
          </div>
        </div>
      </div>
    <div className='w-full'>
      <LandingPage/>
    </div>
  )
}

export default Home
