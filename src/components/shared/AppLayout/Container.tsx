import { FC, ReactNode } from 'react'
import { Component } from './Component'

export type ContainerProps = {
  className?: string
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  return <Component {...props} {...{}} />
}
