import { Meta, StoryObj } from '@storybook/react'
import { Heading } from "../components/Atoms";
import { HeadingProps } from '../interfaces/heading';


export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {


}


export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes: {
        children: {
            control: {
                key: false
            }

        }
    }
}