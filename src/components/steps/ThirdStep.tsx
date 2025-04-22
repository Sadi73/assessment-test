import { Select } from "antd";
import { Formik } from "formik";
import { StepProps } from "./FirstStep";
import * as Yup from "yup";

type optionType = {
    value: string,
    label: string
}

const techOptions: optionType[] = [
    { value: 'javascript', label: 'javascript' },
    { value: 'typescript', label: 'typescript' },
    { value: 'react', label: 'react' },
    { value: 'next', label: 'next' },
];

const ThirdStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {
    return (
        <Formik
            initialValues={{ expertise: formData.expertise }}
            validationSchema={Yup.object({
                expertise: Yup.array()
                    .min(1, 'Please select at least one expertise')
                    .required('This field is required'),
            })}
            onSubmit={(values) => {
                setFormData({ ...formData, ...values });
                setCurrentStep(4);
            }}
        >
            {({
                values,
                setFieldValue,
                errors,
                touched,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit} className="flex flex-col grow justify-between h-full">
                    <div className="space-y-3">
                        <div>
                            <label>Select Your Expertise</label>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                value={values.expertise}
                                onChange={e => {
                                    setFieldValue('expertise', e);
                                    setFormData({ ...formData, 'expertise': e });
                                }}
                                options={techOptions}
                            />
                            {errors.expertise && touched.expertise && (
                                <div className="text-red-500 text-sm">{errors.expertise}</div>
                            )}
                        </div>
                    </div>

                    <div className="pt-5 mt-auto flex justify-end space-x-3">
                        <button
                            type="button"
                            className="border px-5 py-1 rounded"
                            onClick={() => setCurrentStep(2)}
                        >
                            Back
                        </button>
                        <button type="submit" className="border px-5 py-1 rounded">
                            Next
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default ThirdStep;
