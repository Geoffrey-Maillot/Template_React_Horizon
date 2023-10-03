import clsx from "clsx";
import {
  InputTextarea as InputTextAreaPrime,
  InputTextareaProps,
} from "primereact/inputtextarea";
import { Controller, useFormContext } from "react-hook-form";
interface Props extends InputTextareaProps {
  label?: string;
}

export function InputTextArea({ label, name, ...props }: Props) {
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
            <InputTextAreaPrime
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
