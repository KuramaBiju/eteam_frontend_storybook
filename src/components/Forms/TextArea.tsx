import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}


export const TextArea = ({ label, ...props }: Props) => {

    const [field] = useField(props)
    return (
        <div className="mb-3">
            <label htmlFor={props.id || props.name} className="form-label inline-block mb-2 text-gray-700">     <b>{label}</b> :</label>
            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" {...field} {...props}></textarea>
        </div>
    )
}
