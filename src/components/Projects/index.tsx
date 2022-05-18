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
      <section>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                  Projects
                </h1>
              </div>
            </div>
            <Popover className="p-8">
              <Popover.Panel className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                <div className="relative overflow-hidden">
                  <img
                    src="/image/Mylaundry.PNG"
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
              <Popover.Button></Popover.Button>
            </Popover>
          </div>
        </div>
      </section>
    </>
  )
}
