import React from 'react'
import PropTypes from "prop-types"
import Button from "../../atoms/Button"
import Icon from "../../atoms/Icon"
const ButtonIcon = ({children,type,icon}) => {
    return (
        <>
            <Button type={type}>
                <span style={{marginRight: 11}}>{children}</span> 
                <Icon type={icon}/>
            </Button>
        </>
    )
}

ButtonIcon.prototype = {
    children : PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired,
    type: PropTypes.oneOf['primary','secondary','tertiary']
}
ButtonIcon.defaultProps={
    type: "secondary"
}
export default ButtonIcon
