//import clsx from "clsx";

//import { ToggleButton, ToggleButtonProps } from "primereact/togglebutton";

//import { Controller, useFormContext } from "react-hook-form";
//interface Props extends ToggleButtonProps {
//  label?: string;
//}

//export function Toggle({ label, name, ...props }: Props) {
//  const { control } = useFormContext();

//  return (
//    <Controller
//      name={name}
//      control={control}
//      render={({ field, fieldState }) => (
//        <ToggleButton
//          id={field.name}
//          checked={field.value}
//          onChange={field.onChange}
//          {...props}
//        />
//      )}
//    />
//  );
//}

// React hook form
import { Controller, useFormContext } from "react-hook-form";

// Composant Prime React
import { InputSwitch, InputSwitchProps } from "primereact/inputswitch";
import clsx from "clsx";

interface FormToggleButtonProps extends Partial<Omit<InputSwitchProps, "ref">> {
  /**
   * Nom du champ
   */
  name: string;
  /**
   * Label quand le switch est à true
   */
  labelYes?: string;
  /**
   * Label quand le switch est à false
   */
  labelNo?: string;
}
/**
 * Original component : https://www.primefaces.org/primereact/inputswitch/
 */
export function Toggle({
  name,
  labelYes = "Oui",
  labelNo = "Non",
  ...props
}: FormToggleButtonProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={clsx("flex flex-col")}>
          <label className="font-semibold">
            {field.value ? labelYes : labelNo}
          </label>
          <InputSwitch
            id={field.name}
            checked={field.value}
            {...field}
            {...props}
          />
        </div>
      )}
    />
  );
}
