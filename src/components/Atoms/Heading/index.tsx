import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { HeadingProps } from "../../../interfaces/heading";



const Heading: React.FC<HeadingProps> = ({ size = 'md', children, asChild }: HeadingProps) => {
    const Comp = asChild ? Slot : 'h2';
    return (
        <Comp
            className={clsx('text-gray-100 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg'
                })}>
            {children}
        </Comp>)
}

export default Heading