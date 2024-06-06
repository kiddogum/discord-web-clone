import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=" p-8 m-0 bg-gradient-to-br from-violet-500 to-blue-900 border-t-neutral-300 border-t-4 lg:p-16 xl:px-32">
      <div className="md:flex md:justify-between">
        <div className="mr-10">
          <select
            name="language"
            id="language"
            className="cursor-pointer my-8 py-2 pl-2 pr-4 bg-transparent text-white border-none"
          >
            <option value="english" className="text-black">
              English
            </option>
            <option value="indonesia" className="text-black">
              Indonesia
            </option>
            <option value="french" className="text-black">
              French
            </option>
          </select>

          <div className="flex gap-6 my-8">
            <FaXTwitter className="text-white text-2xl" />
            <FaInstagram className="text-white text-2xl" />
            <FaFacebook className="text-white text-2xl" />
            <FaYoutube className="text-white text-2xl" />
            <FaTiktok className="text-white text-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-4 md:gap-12 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h6 className=" text-white text-xl font-semibold ">Product</h6>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Download
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Nitro
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Status
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              App Directory
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              New Mobile Experience
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className=" text-white text-xl font-semibold ">Company</h6>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              About
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Jobs
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Brand
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Newsroom
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className=" text-white text-xl font-semibold">Resources</h6>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              College
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Support
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Safety
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Blog
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Feedback
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              StreamKit
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Creators
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Community
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Developers
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Gaming
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Quests
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Official 3rd Party Merch
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className=" text-white text-xl font-semibold ">Policies</h6>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Terms
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Privacy
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Cookie Settings
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Guidelines
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Acknowledgements
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Licenses
            </a>
            <a href="#" className="text-white text-sm font-light sm:text-lg">
              Company Information
            </a>
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-between pt-8 border-t-white border-t-2">
        <div className="flex items-center gap-2 text-white font-bold text-center">
          <FaDiscord className="text-white text-2xl mt-1 sm:text-4xl" />
          <h2 className="text-white font-black sm:text-2xl">Discord</h2>
        </div>

        <button className=" button-sm py-2 px-4 bg-light-blue text-white font-semibold rounded-full hover:shadow-xl">
          Open Discord
        </button>
      </div>
    </section>
  );
};

export default Footer;
