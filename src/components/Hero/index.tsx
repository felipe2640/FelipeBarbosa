import React from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from './RainbowHighlight'

type Props = {}

function index({}: Props) {
  return (
    <div className="flex flex-row justify-center items-start ">
      <div className="w-full mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight />
        </RoughNotationGroup>
      </div>
    </div>
  )
}

export default index
