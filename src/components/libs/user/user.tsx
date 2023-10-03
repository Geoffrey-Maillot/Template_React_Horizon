import clcx from "clsx";
import { Dispatch, SetStateAction } from "react";
interface UserItemProps {
  name: string;
  id: number;
  isLogged?: boolean;
  selectUser: Dispatch<SetStateAction<number>>;
  isSelected?: boolean;
}

export function User({
  name,
  id,
  isLogged,
  isSelected,
  selectUser,
}: UserItemProps) {
  const backgroundColor = isLogged
    ? "bg-green-100"
    : isSelected
    ? "bg-neutral-200"
    : "bg-neutral-100";
  const backgroundColorHover = isLogged ? "" : "hover:bg-neutral-200";
  const borderColor = isLogged ? "border-b-green-200" : "border-b-slate-400";

  return (
    <div
      className={clcx(
        backgroundColor,
        backgroundColorHover,
        borderColor,
        "flex w-full items-center justify-between gap-x-8 p-4",
        "border-b-2",
        "cursor-pointer",
      )}
      onClick={() => selectUser(id)}
      role="button"
    >
      <div className="  font-bold text-slate-800">{name}</div>
      <div className="h-12 w-12 overflow-hidden  rounded-full">
        <img
          className="object-fit w-full object-center"
          src={`https://i.pravatar.cc/${id + 200}`}
          alt="User"
          loading="lazy"
        />
      </div>
    </div>
  );
}
