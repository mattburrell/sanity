import React from 'react'
import {Pane} from '../../components/pane'
import styles from './UnknownPaneType.css'

interface UnknownPaneTypeProps {
  type?: string
  isSelected: boolean
  isCollapsed: boolean
  onExpand?: () => void
  onCollapse?: () => void
  index?: number
}

export default class UnknownPaneType extends React.PureComponent<UnknownPaneTypeProps> {
  static defaultProps = {
    type: undefined,
    onExpand: undefined,
    onCollapse: undefined
  }

  render() {
    const {isSelected, isCollapsed, onCollapse, onExpand, type} = this.props

    return (
      <Pane
        title="Unknown pane type"
        index={this.props.index}
        isSelected={isSelected}
        isCollapsed={isCollapsed}
        onCollapse={onCollapse}
        onExpand={onExpand}
      >
        <div className={styles.root}>
          <p>
            {type ? (
              <span>
                Structure item of type <code>{type}</code> is not a known entity.
              </span>
            ) : (
              <span>
                Structure item is missing required <code>type</code> property.
              </span>
            )}
          </p>
        </div>
      </Pane>
    )
  }
}