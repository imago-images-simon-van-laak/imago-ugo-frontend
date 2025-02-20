interface Props {
    onClick?: () => void;
    label: string;
}

const Button = ({ onClick, label }: Props) => {
    return (
        <button onClick={onClick}
            className='px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200'
        >
            {label}
        </button>
    )
}

export default Button;