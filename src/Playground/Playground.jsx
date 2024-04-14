import Childs from './Childs'
import React from 'react'

class Playground extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resetChild: false,
    }
  }

  createChilds = (str) => {
    const num = Number(str) > 25 ? 25 : Number(str)
    const result = []

    for (let i = 0, alphabet = 65; i < num; i++, alphabet++) {
      const letter = String.fromCodePoint(alphabet)
      result.push(
        <Childs
          childID={letter}
          name={letter}
          key={alphabet + String(i)}
          alignSelf={this.props.alignSelf}
          flexBasis={this.props.flexBasis}
          resetChild={this.state.resetChild}
        />
      )
    }

    return result
  }

  handleResetChild = () => {
    this.setState({ resetChild: !this.state.resetChild })
  }

  render() {
    return (
      <div
        id="parent_container"
        style={{
          flexDirection: this.props.direction,
          flexWrap: this.props.wrap,
          justifyContent: this.props.justifyContent,
          alignItems: this.props.alignItems,
          alignContent: this.props.alignContent,
        }}
      >
        {this.createChilds(this.props.numberOfChild)}
        <button
          className="reset-childs"
          onClick={this.handleResetChild}
          style={{ cursor: 'pointer' }}
        >
          ↺
        </button>
      </div>
    )
  }
}

export default Playground
