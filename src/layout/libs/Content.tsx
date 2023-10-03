import { PropsWithChildren } from "react";

export function ContentLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-[calc(100vh_-_169.98px)] overflow-hidden">{children}</div>
  );
}
