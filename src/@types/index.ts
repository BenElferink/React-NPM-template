import {CSSProperties, MouseEventHandler, ReactNode} from 'react'

export interface ExampleProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick: MouseEventHandler<HTMLButtonElement>
}
