import { Formik } from "formik";
import { StepProps } from "./FirstStep";

const ThirdStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {
    return (
        <Formik
            initialValues={{ expertise: formData.expertise }}
            onSubmit={(values) => {
                setFormData({ ...formData, ...values });
                setCurrentStep(4);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit} className="flex flex-col grow justify-between h-full">
                    {/* Form Content */}
                    <div className="space-y-3">
                        <div>
                            <label>Select Your Expertise</label>
                            <input
                                type="text"
                                className="border w-full"
                                name="expertise"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.expertise}
                            />
                            {errors.expertise && touched.expertise && (
                                <div className="text-red-500 text-sm">{errors.expertise}</div>
                            )}
                        </div>
                    </div>

                    {/* Button Section */}
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
