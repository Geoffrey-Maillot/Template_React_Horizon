import { Button } from "primereact/button";
import { Link, useLocation } from "react-router-dom";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  const { pathname } = useLocation();
  const postRoute = pathname.includes("post") && !pathname.endsWith("s");
  return (
    <>
      <div className="prose relative max-w-full bg-gradient-to-r from-green-400 to-blue-500 py-6">
        {postRoute && (
          <div className="absolute left-4 top-2/4 -translate-y-2/4">
            <Link to="/posts">
              <Button rounded icon="pi pi-arrow-left" severity="info" />
            </Link>
          </div>
        )}
        <h1 className="text-center text-white">{title}</h1>
      </div>
    </>
  );
};
