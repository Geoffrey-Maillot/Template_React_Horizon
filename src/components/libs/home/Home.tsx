import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <header className="prose relative flex h-40 w-full max-w-full flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="text-white">Embording Horizon</h1>
        <div>
          <Link to="/posts" className="mx-4 text-blue-600">
            Stack Horizon React
          </Link>
          <Link to="/rappel" className="mx-4 text-blue-600">
            Rappel React
          </Link>
        </div>
      </header>
    </div>
  );
};

export { Home };
