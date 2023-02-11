
import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}


export const Checkbox = ({ label, ...props }: Props ) => {

    const [ field ] = useField({ ...props, type: 'checkbox' });

    return (
    
       <div className="form-group form-check mb-6">
         <label htmlFor={ props.id || props.name } className="form-check-label inline-block text-gray-8000">
         <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckDefault" { ...field } { ...props } />
         <b>{label}</b> :
         </label>
       
       </div>
  
      
   
    )
}