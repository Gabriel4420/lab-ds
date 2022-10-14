import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../components/Atoms';
import { Checkbox } from "../components/Mols";
import { CheckboxProps } from '../interfaces/checkbox';


export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {

    },
    argTypes: {

    },
    decorators: [
        (story) => {
            return (<div className='flex items-center gap-2'>{story()}<Text size='sm'>Lembrar-me de mim por 30 dias</Text></div>)
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

