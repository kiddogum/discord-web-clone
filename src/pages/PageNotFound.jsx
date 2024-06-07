import { MdOutlineError } from "react-icons/md";

const PageNotFound = () => {
  return (
    <div className="h-dvh grid place-content-center bg-light-black">
      <MdOutlineError className="mx-auto text-8xl text-white" />
      <h1 className="title ">Page Not Found!</h1>
      <p className="desc ">The page you're trying to find are not available.</p>
    </div>
  );
};

export default PageNotFound;
