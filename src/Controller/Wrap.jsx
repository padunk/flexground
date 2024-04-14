import React from 'react'

const Wrap = (props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor="wrap">Wrap Style:</label>
      <select
        onChange={props.handleWrap}
        name="wrap"
        id="wrap"
        value={props.wrap}
      >
        <option value="nowrap">No Wrap</option>
        <option value="wrap">Wrap</option>
        <option value="wrap-reverse">Wrap Reverse</option>
      </select>
    </div>
  )
}

export default Wrap
