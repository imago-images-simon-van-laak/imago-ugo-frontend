interface Props {
    onChange: (text: string) => void;
    placeholder: string;
    type: React.HTMLInputTypeAttribute | undefined
    value: string;
}

const Input = ({ onChange, value, placeholder, type }: Props) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
    )
}

export default Input;