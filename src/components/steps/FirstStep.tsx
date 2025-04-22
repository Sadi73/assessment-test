import { Formik } from "formik";
import { FormDataType } from "../FormRoot";

export type StepProps = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FirstStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {

    return (
        <div className="flex flex-col justify-center items-center space-y-3">
            <Formik
                initialValues={{ name: formData?.name, email: formData?.email }}
                onSubmit={(values) => {
                    setFormData({ ...formData, ...values });
                    setCurrentStep(2);
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
                            <label>Enter Your Name</label>
                            <input
                                type="name"
                                className="border col-span-2"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            <label>Enter Your Email</label>
                            <input
                                type="email"
                                className="border col-span-2"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div></div>
                            <div className="col-span-2 flex justify-end space-x-3">
                                {/* <button
                                    type="button"
                                    className="border px-5"
                                    onClick={() => setCurrentStep('first')}
                                >
                                    Back
                                </button> */}
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

export default FirstStep;