import { FormDataType } from "../components/FormRoot";

export const getDataFromLocalStorage = () => {
    const savedData = localStorage.getItem('savedData');
    return savedData ? JSON.parse(savedData) : [];
};

export const setDataIntoLocalStorage = (newData: FormDataType[]) => {
    localStorage.setItem('savedData', JSON.stringify(newData))
};