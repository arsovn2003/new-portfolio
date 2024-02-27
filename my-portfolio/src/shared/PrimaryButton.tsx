interface Props {
    value: string;
}

const PrimaryButton = ({ value }: Props) => {
    return (
        <>
            <button
                className="
                bg-rose-800
                w-40
                py-4
                mt-4
                text-xl
                uppercase
                tracking-wide	
                "
            >{value}</button>
        </>
    )
}

export default PrimaryButton;