import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const Select = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className="mb-6">
      <label htmlFor={props.id || props.name}>
        <b>{label}</b> :
      </label>
      <select
        className="form-select appearance-none  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        {...field}
        {...props}
      />
    </div>
  );
};
