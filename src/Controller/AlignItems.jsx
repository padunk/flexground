import React from 'react'
import { camelCaseToString } from '../libs/helpers'

const AlignItems = (props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.name}>{camelCaseToString(props.name)}:</label>
      <select
        onChange={props.handleAlignItems}
        name={props.name}
        id={props.name}
        value={props.alignItems}
      >
        <option value="flex-start">Flex Start</option>
        <option value="flex-end">Flex End</option>
        <option value="center">Center</option>
        <option value="stretch">Stretch</option>
        <option value="baseline">Baseline</option>
        <option value="">None</option>
      </select>
    </div>
  )
}

export default AlignItems
