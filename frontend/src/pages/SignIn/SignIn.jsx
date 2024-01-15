import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="********"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <Link
            className="text-sm underline text-gray-500 dark:text-gray-400"
            to={"/forgot-password"}
          >
            Forgot Password?
          </Link>
          <Link
            className="text-sm underline text-gray-500 dark:text-gray-400"
            to={"/signup"}
          >
            New User? Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
