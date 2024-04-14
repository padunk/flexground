import React from 'react'

const AlignContent = (props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor="alignContent">Align Content:</label>
      <select
        onChange={props.handleAlignContent}
        name="alignContent"
        id="alignContent"
        value={props.alignContent}
      >
        <option value="flex-start">Flex Start</option>
        <option value="flex-end">Flex End</option>
        <option value="center">Center</option>
        <option value="stretch">Stretch</option>
        <option value="space-around">Space Around</option>
        <option value="space-between">Space Between</option>
      </select>
    </div>
  )
}

export default AlignContent
