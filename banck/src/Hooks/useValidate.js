
import { useState } from "react";
import { useSwal } from "./useSwal";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);
  const { toast } = useSwal();

  //Inserta o edita el parametro en el formulario sea archivo u otro
  const onInputChange = ({ target }, file = false) => {
    if (!file) {
      const { name, value, type } = target;
      setFormState({
        ...formState,
        [name]: type === "number" ? Number(value) : value,
      });
    } else {
      const { name, files } = target;
      if (files.length > 1) {
        toast({
          text: "solo puede cargar una archivo a la vez",
          icon: "warning",
        });
        return;
      }
      setFormState({
        ...formState,
        [name]: { file: files[0], url: URL.createObjectURL(files[0]) },
      });
    }
  };

  //resetea el formulario elimina todos los datos y vuele a su valor inicial
  const resetForm = () => {
    setFormState(initialForm);
  };

  const changeInicialForm = (data) => {
    setFormState(data);
  };

  //retornamos el formulario completo, cada elemento del formuario por aparte, el evento para resetear, el
  return {
    ...formState,
    formState,
    resetForm,
    onInputChange,
    changeInicialForm,
  };
};
