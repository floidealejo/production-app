import React from 'react'
import PropTypes from 'prop-types'
import { mapType } from './helpers'
const Icon = ({ type }) => {
  return (
    <div>
      <img src={mapType(type)} />
    </div>
  )
}
Icon.propTypes = {
  type: PropTypes.string.isRequired,
}
export default Icon
