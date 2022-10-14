import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx"
import { TextInputIconProps, TextInputProps, TextInputRootProps } from "../../../interfaces/textinput";


const TextInputRoot: React.FC<TextInputRootProps> = (props: TextInputRootProps) => {
    return (<div className={`
    flex items-center gap-3
    py-4 px-3 
    rounded-[10px] 
    w-full
    bg-gray-800
    h-12 
    focus-within:ring-2 ring-cyan-300 
    `}>{props.children}</div>)
}

const TextInputIcon: React.FC<TextInputIconProps> = (props: TextInputIconProps) => {
    return (
        <Slot className="w-6 h-6 text-gray-400" >
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'


const ComponentTextInput: React.FC<TextInputProps> = (props: TextInputProps) => {

    return (
        <input className={clsx(`
        bg-transparent flex-1
        text-gray-100 
        text-xs 
        placeholder:text-gray-400 outline-none `)} {...props} />
    )
}

ComponentTextInput.displayName = 'TextInput.Input'


const TextInput = {
    Root: TextInputRoot,
    Input: ComponentTextInput,
    Icon: TextInputIcon
}

export default TextInput