import { useField } from "formik";

interface Props {
  id: string;
  label: string;
  name: string;
  htmlFor: string;
  arial: string;
  type?: "text" | "email" | "password" | "number" | "date";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        className="form-label inline-block mb-2 text-gray-700"
        aria-labelledby={props.arial}
        htmlFor={props.id || props.name}
      >
        <b>{label}</b> :
      </label>
      <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        {...field}
        {...props}
      />
    </div>
  );
};
