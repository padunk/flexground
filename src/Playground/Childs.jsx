import React from 'react'

class Childs extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      flexGrow: 0,
      flexShrink: 1,
      order: 0,
      isFlip: false,
      prevResetChild: this.props.resetChild,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.resetChild !== state.prevResetChild) {
      return {
        flexGrow: 0,
        flexShrink: 1,
        order: 0,
        isFlip: false,
        prevResetChild: props.resetChild,
      }
    }
    return null
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: Number(e.target.value) })
  }

  handleFlip = (e) => {
    e.preventDefault()
    this.setState({ isFlip: !this.state.isFlip })
  }

  render() {
    const { alignSelf, childID, flexBasis, name } = this.props
    const { flexGrow, flexShrink, order, isFlip } = this.state
    return (
      <div
        className={`child_container ${isFlip ? 'flip' : ''}`}
        name={name}
        style={{
          alignSelf: `${alignSelf}`,
          flex: `${flexGrow} ${flexShrink} ${flexBasis}`,
          order: `${order}`,
        }}
      >
        <p className="child_ID">{childID}</p>
        <div className="flipper">
          <div className="front">
            <div className="input-wrapper">
              <label htmlFor="flexGrow">Grow</label>
              <input
                type="number"
                min={0}
                max={10}
                name="flexGrow"
                id="flexGrow"
                onChange={this.handleChange}
                value={flexGrow}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="flexShrink">Shrink</label>
              <input
                type="number"
                min={0}
                max={10}
                name="flexShrink"
                id="flexShrink"
                onChange={this.handleChange}
                value={flexShrink}
              />
            </div>
          </div>
          <div className="back">
            <p>Basis: {flexBasis}</p>
            <div className="input-wrapper">
              <label htmlFor="order">Order</label>

              <input
                type="number"
                name="order"
                id="order"
                onChange={this.handleChange}
                min={-5}
                max={10}
                value={order}
              />
            </div>
          </div>
        </div>
        <button className="flip_button" onClick={this.handleFlip}>
          ↩
        </button>
      </div>
    )
  }
}

export default Childs
