import { ReactNode } from 'react'

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}
