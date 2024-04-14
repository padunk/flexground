import React from 'react'

const FlexBasis = (props) => {
  const style = {
    width: '100%',
    marginBottom: '0.5em',
    padding: '0.5em 1em',
    borderRadius: '6px',
    background: 'white',
    border: 'initial',
  }
  return (
    <div className="input-wrapper flex-column">
      <label style={{ marginBottom: '0.5rem' }}>Flex Basis</label>
      <input
        type="number"
        value={props.flexBasisValue}
        min={1}
        max={200}
        name="flexBasis"
        onChange={props.handleFlexBasis}
        style={style}
      />
      <select
        value={props.flexBasisUnit}
        name="flexBasisUnit"
        onChange={props.handleFlexBasis}
        style={style}
      >
        <option value="px">Pixel</option>
        <option value="em">em</option>
        <option value="rem">rem</option>
        <option value="%">%</option>
      </select>
    </div>
  )
}

export default FlexBasis
