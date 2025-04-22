import { Formik } from "formik";
import { StepProps } from "./FirstStep";

const ThirdStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {

    return (
        <div className="flex flex-col justify-center items-center space-y-3">
            <p>Third Step</p>
            <Formik
                initialValues={{ expertise: '' }}
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
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-3 gap-5">
                            <label>Select Your Expertise</label>
                            <input
                                type="text"
                                className="border col-span-2"
                                name="expertise"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.expertise}
                            />
                            {errors.expertise && touched.expertise && errors.expertise}
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div></div>
                            <div className="col-span-2 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    className="border px-5"
                                    onClick={() => setCurrentStep(2)}
                                >
                                    Back
                                </button>
                                <button type="submit" className="border px-5">
                                    Next
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ThirdStep;