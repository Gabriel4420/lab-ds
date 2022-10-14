import { Meta, StoryObj } from '@storybook/react'
import { Button } from "../components/Atoms";
import { ButtonProps } from '../interfaces/button';


export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'select'
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

