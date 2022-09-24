import { PROJECT_NAME } from "../../../../config";

const Logo = () => {
  return (
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">{PROJECT_NAME}</a>
    </div>
  );
};

export default Logo;
