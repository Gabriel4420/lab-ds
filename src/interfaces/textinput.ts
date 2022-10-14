import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputIconProps {
  children: ReactNode
}
