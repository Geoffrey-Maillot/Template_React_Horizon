import clsx from "clsx";
import { PropsWithChildren } from "react";

export const ContainerUserList = ({ children }: PropsWithChildren) => {
  return (
    <div className={clsx("h-[calc(100vh_-_169.98px)]", "overflow-auto")}>
      {children}
    </div>
  );
};
