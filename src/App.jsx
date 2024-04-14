import React from 'react'
import ChildController from './Controller/ChildController'
import ParentController from './Controller/ParentController'
import Parent from './Playground/Playground'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      direction: 'row',
      wrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'stretch',
      numberOfChild: 3,
      alignSelf: '',
      flexBasisValue: 100,
      flexBasisUnit: 'px',
      flexBasis: '100px',
    }
  }

  handleFlexParent = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChildNumber = (e) => {
    e.preventDefault()
    this.setState({ numberOfChild: Number(e.target.value) })
  }

  handleFlexChild = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFlexBasis = (e) => {
    e.preventDefault()
    const flexBasisValue =
      e.target.name === 'flexBasis'
        ? Number(e.target.value)
        : this.state.flexBasisValue
    const flexBasisUnit =
      e.target.name === 'flexBasisUnit'
        ? e.target.value
        : this.state.flexBasisUnit
    const flexBasis = String(flexBasisValue) + flexBasisUnit

    this.setState({
      flexBasisValue,
      flexBasisUnit,
      flexBasis,
    })
  }

  reset = () => {
    this.setState(() => ({
      direction: 'row',
      wrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'stretch',
      numberOfChild: 3,
      alignSelf: '',
      flexBasisValue: 100,
      flexBasisUnit: 'px',
      flexBasis: '100px',
    }))
  }

  render() {
    // console.log(this.state);
    return (
      <main id="app">
        <div className="controller parent">
          <h2 className="parent_controller--title">Parent Flex</h2>
          <div className="controller-wrapper">
            <ParentController
              {...this.state}
              handleFlexParent={this.handleFlexParent}
              reset={this.reset}
            />
          </div>
        </div>

        <div className="controller child">
          <h2 className="child_controller--title">Child Flex</h2>
          <div className="controller-wrapper">
            <ChildController
              handleChildNumber={this.handleChildNumber}
              handleFlexChild={this.handleFlexChild}
              handleFlexBasis={this.handleFlexBasis}
              numberOfChild={this.state.numberOfChild}
              alignSelf={this.state.alignSelf}
              flexBasisValue={this.state.flexBasisValue}
              flexBasisUnit={this.state.flexBasisUnit}
            />
          </div>
        </div>
        <Parent {...this.state} />
      </main>
    )
  }
}

export default App
