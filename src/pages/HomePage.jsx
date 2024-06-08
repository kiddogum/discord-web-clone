import svgHero from "../assets/hero-computer.svg";
import featureOne from "../assets/feature-1.svg";
import featureTwo from "../assets/feature-2.svg";
import featureThree from "../assets/feature-3.svg";
import featureFour from "../assets/feature-4.svg";
import featureFive from "../assets/feature-5.svg";
import featureSix from "../assets/feature-6.svg";
import { GoDownload } from "react-icons/go";
import Feature from "../components/Feature";
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";

const HomePage = () => {
  const handleAlertDownload = () => {
    alert(`downloading discord!`);
  };

  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-stars bg-center bg-repeat">
      <div className="bg-light top-[0%] left-[-80%] size-[120rem] lg:left-[-20%]"></div>
      <div className="bg-light top-[20%] left-[-40%] size-[130rem] lg:left-[10%]"></div>
      <div className="bg-light left-[-40%] size-[120rem] top-[70%] lg:left-[25%]"></div>
      <div className="bg-light left-[-80%] size-[120rem] top-[80%] lg:left-[-60%]"></div>
      <div className="relative z-10">
        <section className="mx-10 py-28 sm:py-36">
          <div className="mx-2 sm:mx-8 lg:mx-16 xl:flex item-center xl:my-16">
            <img src={svgHero} className=" mx-auto md:w-3/4 lg:w-2/3" />

            <div className="my-8 flex flex-col gap-4 lg:my-12 xl:my-20 xl:gap-8">
              <h1 className="title">GROUP CHAT THAT’S ALL FUN & GAMES</h1>
              <p className="desc">
                Discord is great for playing games and chilling with friends, or
                even building a worldwide community. Customize your own space to
                talk, play, and hang out.
              </p>
            </div>
          </div>
          <div className="sm:mx-12 mx-0 justify-center flex flex-col gap-6 lg:flex-row">
            <button
              className=" button-md bg-white flex gap-2 justify-center text-black hover:text-light-blue hover:shadow-xl"
              onClick={handleAlertDownload}
            >
              <GoDownload className="text-2xl" />
              <p>Download for Windows</p>
            </button>
            <button className=" button-md bg-dark-blue text-white hover:shadow-xl">
              <Link
                to="https://discord.com/channels/@me"
                className="hover:no-underline"
              >
                Open Discord in Your Browser
              </Link>
            </button>
          </div>
        </section>

        <Feature
          title={`MAKE YOUR GROUP CHATS MORE FUN`}
          desc={`Use custom emoji, stickers, soundboard effects and more to add your
            personality to your voice, video, or text chat. Set your avatar and
            a custom status, and write your own profile to show up in chat your
            way.`}
          svg={featureOne}
          color={`color1`}
        />

        <Feature
          title={`WHEREVER YOU GAME, HANG OUT HERE`}
          desc={`On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.`}
          svg={featureTwo}
          color={`color2`}
        />

        <Feature
          title={`STREAM LIKE YOU’RE IN THE SAME ROOM`}
          desc={`High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.`}
          svg={featureThree}
          color={`color3`}
        />

        <Marquee />

        <Feature
          title={`HOP IN WHEN YOU'RE FREE, NO NEED TO CALL`}
          desc={`Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.`}
          svg={featureFour}
          color={`color4`}
        />

        <Feature
          title={`SEE WHO'S AROUND TO CHILL`}
          desc={`See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.`}
          svg={featureFive}
          color={`color5`}
        />

        <Feature
          title={`ALWAYS HAVE SOMETHING TO DO TOGETHER`}
          desc={`Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.`}
          svg={featureSix}
          color={`color6`}
        />

        <section className="mt-36 mx-10 xl:mx-52">
          <h1 className="title">YOU CAN'T SCROLL ANYMORE. BETTER GO CHAT.</h1>
          <button
            className=" button-md mt-8 mx-auto bg-light-blue flex gap-2 justify-center text-white hover:shaodw-xl"
            onClick={handleAlertDownload}
          >
            <GoDownload className="text-2xl" />
            <p>Download for Windows</p>
          </button>
        </section>
        <h1 className="title mt-12 bg-gradient-to-r from-pink-400 to-purple bg-clip-text leading-none text-transparent text-[4.7rem] sm:text-[9rem] lg:text-[15rem] xl:mt-40 xl:text-[19rem]">
          DISCORD
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
