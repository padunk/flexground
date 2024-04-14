import React from 'react'

const Direction = (props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor="direction">Direction:</label>
      <select
        onChange={props.handleDirection}
        name="direction"
        id="direction"
        value={props.direction}
      >
        <option value="row">Row</option>
        <option value="row-reverse">Row Reverse</option>
        <option value="column">Column</option>
        <option value="column-reverse">Column Reverse</option>
      </select>
    </div>
  )
}

export default Direction
