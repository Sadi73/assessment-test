import { Formik } from "formik";
import { FormDataType } from "../FormRoot";

export type StepProps = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FirstStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {

    return (
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
                <form onSubmit={handleSubmit} className="flex flex-col grow">
                    <div className="space-y-3">
                        <div>
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="border w-full"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && (
                                <div className="text-red-500 text-sm">{errors.name}</div>
                            )}
                        </div>

                        <div>
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="border w-full"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <div className="text-red-500 text-sm">{errors.email}</div>
                            )}
                        </div>
                    </div>

                    {/* Button section */}
                    <div className="mt-auto flex justify-end">
                        <button type="submit" className="border px-5 py-1 rounded">
                            Next
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default FirstStep;