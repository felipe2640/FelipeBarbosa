import { type } from 'os'
import React, { Props } from 'react'
import { RoughNotation } from 'react-rough-notation'

const Character = {
  Developer: {
    color: '#fb8500',
    title: 'Developer'
  },
  Front: {
    color: '#ffb703',
    title: 'Front-End'
  },
  Programer: {
    color: '#023047',
    title: 'Programer'
  },
  Entrepreneur: {
    color: '#219ebc',
    title: 'Entrepreneur'
  }
}

export const RainbowHighlight = () => {
  return (
    <>
      {Object.entries(Character).map(([key, value]) => {
        return (
          <RoughNotation
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iterations={1}
            animationDuration={Math.floor(30 * value.title.length)}
            color={value.color}
            key={key}
          >
            <h1 className="text-3xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              {value.title}
            </h1>
          </RoughNotation>
        )
      })}
    </>
  )
}
