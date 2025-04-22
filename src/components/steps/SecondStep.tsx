import { Formik } from "formik";
import { StepProps } from "./FirstStep";

const SecondStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {

    return (
        <Formik
            initialValues={{ address: formData?.address, phoneNumber: formData?.phoneNumber }}
            onSubmit={(values) => {
                setFormData({ ...formData, ...values });
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {errors.address && touched.address && errors.address}
                        </div>

                        <div className="">
                            <label>Enter Phone Number</label>
                            <input
                                type="number"
                                className="border w-full"
                                name="phoneNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                            />
                            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
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