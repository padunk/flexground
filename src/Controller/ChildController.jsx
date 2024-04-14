import React from 'react'
import AlignItems from './AlignItems'
import FlexBasis from './FlexBasis'

class ChildController extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="input-wrapper">
          <label htmlFor="numberOfChild">Childs:</label>
          <input
            type="number"
            value={this.props.numberOfChild}
            name="numberOfChild"
            id="numberOfChild"
            min={2}
            max={25}
            onChange={this.props.handleChildNumber}
          />
        </div>
        <AlignItems
          name="alignSelf"
          handleAlignItems={this.props.handleFlexChild}
          alignItems={this.props.alignSelf}
        />
        <FlexBasis
          flexBasisValue={this.props.flexBasisValue}
          flexBasisUnit={this.props.flexBasisUnit}
          handleFlexBasis={this.props.handleFlexBasis}
        />
      </>
    )
  }
}

export default ChildController
