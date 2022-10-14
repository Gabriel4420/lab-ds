import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ButtonProps } from "../../../interfaces/button";


const Button: React.FC<ButtonProps> = ({ size = 'md', children, asChild }: ButtonProps) => {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp
            className={
                clsx(`py-4 px-3 
            bg-cyan-500 
            rounded 
            font-semibold 
            text-black 
            w-full 
            transition-colors 
            focus:ring-2 ring-light 
            hover:bg-cyan-300`,
                    {
                        'text-xs': size === 'sm',
                        'text-sm': size === 'md',
                        'text-md': size === 'lg'
                    }
                )}>
            {children}
        </Comp>
    )
}

export default Button