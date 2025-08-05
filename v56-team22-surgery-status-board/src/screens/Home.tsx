import React from 'react'
import { Link } from 'react-router'
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="px-[30px] md:px-[100px] mt-[100px] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-[60px]">
        Welcome to Appname
      </h1>
      <p className="text-lg text-center mb-[30px]">
        Monitor your loved ones' surgery journey with ease. Appname provides
        real-time updates on patient status—Checked In, Pre-Procedure, In
        Progress, Closing, Recovery, Complete and Dismissal <br />
      </p>
      <p className="text-lg text-center mb-[100px]">
        You stay informed every step of the way. Simple, secure, and
        compassionate care at your fingertips.
      </p>

      <div className="flex flex-col gap-[30px] justify-center md:flex-row md:gap-[100px] mb-[100px]">
        <Link to={'/sign-in'}>
          <Button
            variant="default"
            className="w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white"
          >
            Sign in
          </Button>
        </Link>
        <Link to={'/patient-status'}>
          <Button
            variant="default"
            className="w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white"
          >
            Sign in as guest
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home
