import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectionPath: string;
}

export const ProtectedRoute = ({
  children,
  isAllowed,
  redirectionPath,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectionPath} />;
  }

  return children ? children : <Outlet />;
};
