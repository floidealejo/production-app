import React from 'react'
import Heading from '../../atoms/Heading/Heading'
export default {
  title: 'Atoms/Heading',
  component: Heading,
}

export const Default = () => <Heading>Heading</Heading>
export const ColorPrimary = () => <Heading color="primary">Heading</Heading>
export const ColorDefault = () => <Heading color="default">Heading</Heading>
export const medium = () => <Heading size="md">Heading</Heading>
export const small = () => <Heading size="sm">Heading</Heading>
export const extraSmall = () => <Heading size="xs">Heading</Heading>

// export const Default = () => <Heading >Heading</Heading>

//Primary.storyName = 'Primary'
