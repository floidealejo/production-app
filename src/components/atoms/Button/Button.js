import React from 'react'
import PropTypes from 'prop-types'
import clasaNames from 'classnames'
import './Button.css'
const Button = ({ type, children, isBlock }) => (
  <button
    className={clasaNames('button', {
      [`button-${type}`]: type,
      'is-block': isBlock,
    })}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  isBlock: PropTypes.boolean,
}

Button.defaultProps = {
  type: "primary",
  isBlock: true,
}
export default Button
