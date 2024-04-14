import React from 'react'

const JustifyContent = (props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor="justifyContent">Justify Content:</label>
      <select
        onChange={props.handleJustifyContent}
        name="justifyContent"
        id="justifyContent"
        value={props.justifyContent}
      >
        <option value="flex-start">Flex Start</option>
        <option value="flex-end">Flex End</option>
        <option value="center">Center</option>
        <option value="space-around">Space Around</option>
        <option value="space-between">Space Between</option>
      </select>
    </div>
  )
}

export default JustifyContent
