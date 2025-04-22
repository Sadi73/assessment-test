import { Formik } from "formik";
import { StepProps } from "./FirstStep";
import * as Yup from "yup";

const SecondStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {

    return (
        <Formik
            initialValues={{ address: formData?.address, phoneNumber: formData?.phoneNumber }}
            validationSchema={Yup.object().shape({
                address: Yup.string()
                    .required("Address is required")
                    .min(5, "Address must be at least 5 characters"),
                phoneNumber: Yup.string()
                    .required("Phone Number is required")
                    .matches(/^[0-9]{10,15}$/, "Phone Number must be 10 to 15 digits"),
            })}
            onSubmit={(values) => {
                setCurrentStep(3);
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
                    <div className="space-y-3">
                        <div className="">
                            <label>Enter Your Address</label>
                            <input
                                type="text"
                                className="border w-full"
                                name="address"
                                onChange={(e) => {
                                    handleChange(e);
                                    setFormData({ ...formData, [e.target.name]: e.target.value });
                                }}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {errors.address && touched.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>

                        <div className="">
                            <label>Enter Phone Number</label>
                            <input
                                type="number"
                                className="border w-full"
                                name="phoneNumber"
                                onChange={(e) => {
                                    handleChange(e);
                                    setFormData({ ...formData, [e.target.name]: e.target.value });
                                }}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                            />
                            {errors.phoneNumber && touched.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                        </div>
                    </div>

                    <div className="">
                        <div></div>
                        <div className="col-span-2 flex justify-end space-x-3">
                            <button
                                type="button"
                                className="border px-5 py-1 rounded"
                                onClick={() => setCurrentStep(1)}
                            >
                                Back
                            </button>
                            <button type="submit" className="border px-5 py-1 rounded">
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default SecondStep;