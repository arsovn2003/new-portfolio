interface Props {
    placeholder: string;
}

const CustomInput = ({ placeholder }: Props) => {
    return (
        <>
            <input
                type="text"
                className="
                bg-transparent
                border-b-2
                border-rose-800
                text-gray-400
                py-2
                pe-20
                w-full
                focus:outline-none
                "
                placeholder={placeholder}
            />
        </>
    )
}

export default CustomInput;