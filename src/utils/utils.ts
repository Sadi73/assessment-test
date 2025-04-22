import { FormDataType, initialValues } from "../components/FormRoot";

export const getSavedDataFromLocalStorage = () => {
    const savedData = localStorage.getItem('savedData');
    return savedData ? JSON.parse(savedData) : [];
};

export const setDataIntoLocalStorage = (newData: FormDataType[]) => {
    localStorage.setItem('savedData', JSON.stringify(newData))
};

export const saveFormDataToLocalStorage = (data: FormDataType) => {
    localStorage.setItem('formData', JSON.stringify(data));
  };
  
  export const getFormDataFromLocalStorage = (): FormDataType => {
    const data = localStorage.getItem('formData');
    return data ? JSON.parse(data) : initialValues;
  };