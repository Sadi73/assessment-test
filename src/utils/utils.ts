import { FormDataType } from "../components/FormRoot";

export const getSavedDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('savedData');
  return savedData ? JSON.parse(savedData) : [];
};

export const setDataIntoLocalStorage = (newData: FormDataType[]) => {
  localStorage.setItem('savedData', JSON.stringify(newData))
};

export const saveFormDataToLocalStorage = (data: FormDataType, step: number) => {
  const newFormData = { step, data };
  localStorage.setItem('formData', JSON.stringify(newFormData));
};

export const getFormDataFromLocalStorage = (): { step: number; data: FormDataType } | null => {
  const saved = localStorage.getItem('formData');
  return saved ? JSON.parse(saved) : null;
};