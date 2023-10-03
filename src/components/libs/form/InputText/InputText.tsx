import clsx from "clsx";
import {
  InputText as InputTextPrime,
  InputTextProps,
} from "primereact/inputtext";
import { Controller, useFormContext } from "react-hook-form";
interface Props extends InputTextProps {
  label?: string;
}

export function InputText({ label, name, ...props }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <span className="p-float-label">
            <InputTextPrime
              id={field.name}
              value={field.value}
              className={clsx({ "p-invalid": fieldState.error }, "w-full")}
              onChange={(e) => field.onChange(e.target.value)}
              {...props}
            />
            <label className={`${errors && errors[name] && "p-error"}`}>
              {label}
            </label>
          </span>
          {getFormErrorMessage(name)}
        </>
      )}
    />
  );
}
