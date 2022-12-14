import { Meta, StoryObj } from '@storybook/react'
import { Text } from "../components/Atoms";
import { TextProps } from '../interfaces/text';


export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum'
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}


export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
        )
    },
    argTypes: {
        children: {
            control: {
                key: false
            }

        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}