import AlignContent from './AlignContent'
import AlignItems from './AlignItems'
import Direction from './Direction'
import JustifyContent from './JustifyContent'
import React from 'react'
import Wrap from './Wrap'
import { changeObjectToString } from '../libs/helpers'

class ParentController extends React.Component {
  constructor(props) {
    super(props)
  }

  // copyStyle = (e) => {
  //   e.preventDefault()
  //   const flexStyle = changeObjectToString(this.props)
  //   window.prompt('Copy to Clipboard: Ctrl/Cmd + c + enter', flexStyle)
  // }

  copyStyle = async () => {
    try {
      const flexStyle = changeObjectToString(this.props)
      await navigator.clipboard.writeText(flexStyle)
      window.alert('All Style copy to clipboard')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  render() {
    return (
      <>
        <Direction
          direction={this.props.direction}
          handleDirection={this.props.handleFlexParent}
        />
        <Wrap wrap={this.props.wrap} handleWrap={this.props.handleFlexParent} />
        <JustifyContent
          justifyContent={this.props.justifyContent}
          handleJustifyContent={this.props.handleFlexParent}
        />
        <AlignItems
          name="alignItems"
          alignItems={this.props.alignItems}
          handleAlignItems={this.props.handleFlexParent}
        />
        <AlignContent
          alignContent={this.props.alignContent}
          handleAlignContent={this.props.handleFlexParent}
        />
        <div className="cta-wrapper">
          <button
            onClick={this.copyStyle}
            className="parent_controller-copyButton"
          >
            Copy Parent Style
          </button>
          <button
            onClick={this.props.reset}
            className="parent_controller-resetButton"
            title="Reset anything except Flex & Order Prop on Child"
          >
            RESET ALL
          </button>
        </div>
      </>
    )
  }
}

export default ParentController
