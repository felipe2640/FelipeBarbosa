import { Popover } from '@headlessui/react'
import { type } from 'os'
import React, { Props } from 'react'
import { RoughNotation } from 'react-rough-notation'

const Character = {
  MyLaundry: {
    color: '#F59E0B',
    title: 'Developer'
  },
  Baleeiro: {
    color: '#F59E0B',
    title: 'Front-End'
  },
  RoboWhats: {
    color: '#F59E0B',
    title: 'Developer'
  },
  AppClima: {
    color: '#F59E0B',
    title: 'Entrepreneur'
  }
}

export const Projects = () => {
  return (
    <>
      <section className="p-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div className="md:flex">
            <div className="md:shrink-0 pr-2 pl-2 bg-gray-800 flex justify-center flex-col ">
              <div className="max-w-3xl mx-auto h-48 ">
                <h1 className=" text-3xl md:text-6xl text-white  overflow- font-bold py-20 text-center md:text-left">
                  Projects
                </h1>
              </div>
            </div>
            <div className="justify-center">
              <Popover className="">
                <Popover.Panel className="mx-auto gap-8 p-4 ">
                  <div className="relative overflow-hidden">
                    <img
                      src="../image/Mylaundry.PNG"
                      alt="portfolio"
                      className="transform hover:scale-125 transition duration-2000 ease-out"
                    />
                    <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                      My Laundry Lavanderia
                    </h1>
                    <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                      01
                    </h1>
                  </div>
                </Popover.Panel>
                <Popover.Button className="group p-2 hover:bg-sky-500 hover:ring-sky-500">
                  <div className="uppercase tracking-wide text-justify pl-3 mt-4 text-sm text-indigo-500 font-semibold group-hover:text-indigo-300">
                    Case study
                  </div>
                  <p className="mt-1 text-slate-500 text-justify p-3 group-hover:text-white ">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </Popover.Button>
              </Popover>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
