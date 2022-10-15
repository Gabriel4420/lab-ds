import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { TextProps } from "../../../interfaces/text";

const Text: React.FC<TextProps> = ({ size = 'md', children, asChild, className }: TextProps) => {
    const Comp = asChild ? Slot : 'span';
    return (
        <Comp
            className={clsx('text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg'
                },
                className
            )}>
            {children}
        </Comp>
    )
}

export default Text