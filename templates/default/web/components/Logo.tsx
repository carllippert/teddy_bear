import { PROJECT_NAME } from "../../config";

const Logo = () => {
  return (
    <div className="flex-1">
      <a className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-400">
        {PROJECT_NAME}
      </a>
    </div>
  );
};

export default Logo;
