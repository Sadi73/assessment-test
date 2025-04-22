import { Formik } from "formik";
import { StepProps } from "./FirstStep";

const SecondStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentPage }) => {

    return (
        <div className="flex flex-col justify-center items-center space-y-3">
            <p>Second Step</p>
            <Formik
                initialValues={{ address: formData?.address, phoneNumber: formData?.phoneNumber }}
                onSubmit={(values) => {
                    setFormData({ ...formData, ...values });
                    setCurrentPage('third');
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
                            <label>Enter Your Address</label>
                            <input
                                type="text"
                                className="border col-span-2"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {errors.address && touched.address && errors.address}
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            <label>Enter Phone Number</label>
                            <input
                                type="number"
                                className="border col-span-2"
                                name="phoneNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                            />
                            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div></div>
                            <div className="col-span-2 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    className="border px-5"
                                    onClick={() => setCurrentPage('first')}
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

export default SecondStep;