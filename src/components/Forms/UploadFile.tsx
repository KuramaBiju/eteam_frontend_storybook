import { FunctionComponent } from "react";
import { FormikErrors } from "formik";
import { ErrorInputMessage } from "./ErrorInputMessage";

interface IUploadFile {
  data: { files?: File };
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  errors: FormikErrors<{ files?: File }>;
}

const UploadFile: FunctionComponent<IUploadFile> = ({
  data,
  setFieldValue,
  errors
}) => {
  return (
    <div className="mb-6">
      <input
        type="file"
        name="files"
        // set supported file types here,
        // could also check again within formik validation or backend
        accept="image/png, .svg"
        onChange={(e) => {
          // Object is possibly null error w/o check
          if (e.currentTarget.files) {
            setFieldValue("files", e.currentTarget.files[0]);
          }
        }}
      />
      {errors.files && <ErrorInputMessage error={errors.files} />} 
 
    </div>
  );
};

export default UploadFile;
