import { Formik } from "formik";
import { FormDataType } from "../FormRoot";
import * as Yup from "yup";
import { Input } from "antd";

export type StepProps = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FirstStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {

    return (
        <Formik
            initialValues={{ name: formData?.name, email: formData?.email }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required("Full Name is required")
                    .min(3, "Name must be at least 3 characters"),
                email: Yup.string()
                    .required("Email is required")
                    .email("Invalid email address"),
            })}
            onSubmit={(values) => {
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
                            <Input
                                type="text"
                                className="border w-full"
                                name="name"
                                placeholder="Enter Your Full Name"
                                onChange={(e) => {
                                    handleChange(e);
                                    setFormData({ ...formData, [e.target.name]: e.target.value });
                                }}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && (
                                <p className="text-red-500 text-sm">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label>Email Address</label>
                            <Input
                                type="email"
                                className="border w-full"
                                name="email"
                                 placeholder="Enter Valid Email"
                                onChange={(e) => {
                                    handleChange(e);
                                    setFormData({ ...formData, [e.target.name]: e.target.value });
                                }}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                    </div>

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