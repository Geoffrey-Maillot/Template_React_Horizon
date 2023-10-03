import { Suspense } from "react";

type WrappredComponentProps = {
  /** */
};

export function WithSuspense<T extends WrappredComponentProps>(
  WrappredComponent: React.ComponentType<T>,
) {
  return (props: T) => (
    <Suspense fallback={<div>Chargement</div>}>
      <WrappredComponent {...props} />
    </Suspense>
  );
}
