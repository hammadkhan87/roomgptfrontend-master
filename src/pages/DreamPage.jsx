import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../components/CompareSlider";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Toggle from "../components/Toggle";
import appendNewToName from "../../utils/appendNewToName";
import downloadPhoto from "../../utils/downloadPhoto";
import DropDown from "../components/DropDown";
import { rooms, themes } from "../../utils/dropdownTypes";
import { useNavigate } from "react-router-dom";
import { getCredits } from "../constants/cosntants";
import { generateImage } from "../constants/cosntants";

// Configuration for the uploader
const uploader = Uploader({
    apiKey: "public_kW15bbi3ynXcM9L2xeJrhUyf4zsm"
});

const options = { 
  maxFileCount: 1,
  dictDefaultMessage: "Upload your photo",
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: {
    colors: {
      primary: "#2563EB", // Primary buttons & links
      error: "#d23f4d", // Error messages
      shade100: "#fff", // Standard text
      shade200: "#fffe", // Secondary button text
      shade300: "#fffd", // Secondary button text (hover)
      shade400: "#fffc", // Welcome text
      shade500: "#fff9", // Modal close button
      shade600: "#fff7", // Border
      shade700: "#fff2", // Progress indicator background
      shade800: "#fff1", // File item background
      shade900: "#ffff", // Various (draggable crop buttons, etc.)
    },
  },
};

export default function DreamPage() {
  const navigateTo = useNavigate()
  const [credits, setCredits] = useState()
  if (!(localStorage.getItem("loggedIn")==='true')){
    navigateTo("/login");
  }


  useEffect(()=>{
    const getCredit = async()=>{
      setCredits(parseInt(await getCredits()))
    }
    getCredit()
  }, [])


  const [originalPhoto, setOriginalPhoto] = useState(null);
  const [restoredImage, setRestoredImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [restoredLoaded, setRestoredLoaded] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);
  const [error, setError] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [theme, setTheme] = useState("Modern");
  const [room, setRoom] = useState("Living Room");

  const NoCreditsButton = ()=>(
    <>
    <Link to={"/plans"} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition w-full sm:w-auto">
      Buy More Credits!
    </Link>
    </>
  )


  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="670px"
      height="250px"
      
    />
  );

  async function generatePhoto(fileUrl) {
    setLoading(true);
    const imageUrl = await generateImage(fileUrl, theme, room)
    setRestoredImage(imageUrl)
    
    // let newPhoto = await res.json();
    // if (res.status !== 200) {
    //   setError(newPhoto);
    // } else {
    // //   setRestoredImage(newPhoto[1]);
    // }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }


  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      {/* <Header /> */}
      <main className="flex flex-1 w-full flex-col items-center  justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
          Generate your <span className="text-blue-600">dream</span> room
        </h1>
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              {!restoredImage && (
                <>
                  <div className="space-y-4 w-full max-w-sm">
                    <div className="flex mt-3 items-center space-x-3">
                      <img
                        src="/number-1-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium text-white">
                        Choose your room theme.
                      </p>
                    </div>
                    <DropDown
                      theme={theme}
                      setTheme={(newTheme) =>
                        setTheme(newTheme)
                      }
                      themes={themes}
                    />
                  </div>
                  <div className="space-y-4 w-full max-w-sm">
                    <div className="flex mt-10 items-center space-x-3">
                      <img
                        src="/number-2-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium text-white">
                        Choose your room type.
                      </p>
                    </div>
                    <DropDown
                      theme={room}
                      setTheme={(newRoom) => setRoom(newRoom)}
                      themes={rooms}
                    />
                  </div>
                  <div className="mt-4 w-full max-w-sm">
                    <div className="flex mt-6 w-96 items-center space-x-3">
                      <img
                        src="/number-3-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium text-white">
                        Upload a picture of your room.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {restoredImage && (
                <div>
                  Here's your remodeled <b>{room.toLowerCase()}</b> in the{" "}
                  <b>{theme.toLowerCase()}</b> theme!{" "}
                </div>
              )}
              <div
                className={`${
                  restoredLoaded ? "visible mt-6 -ml-8" : "invisible"
                }`}
              >
                <Toggle
                  className={`${restoredLoaded ? "visible mb-6" : "invisible"}`}
                  sideBySide={sideBySide}
                  setSideBySide={(newVal) => setSideBySide(newVal)}
                />
              </div>
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto}
                  restored={restoredImage}
                />
              )}
              {!originalPhoto ? (credits <= 0 ?<NoCreditsButton/>: <UploadDropZone />): ""}
              {originalPhoto && !restoredImage && (
                <img
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl h-96"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex sm:space-x-4 sm:flex-row flex-col">
                  <div>
                    <h2 className="mb-1 font-medium text-lg">Original Room</h2>
                    <img
                      alt="original photo"
                      src={originalPhoto}
                      className="rounded-2xl relative w-full h-96"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="sm:mt-0 mt-8">
                    <h2 className="mb-1 font-medium text-lg">Generated Room</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <img
                        alt="restored photo"
                        src={restoredImage}
                        className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in w-full h-96"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="bg-blue-500 rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 w-40"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex space-x-2 justify-center">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                      setError(null);
                    }}
                    className="bg-blue-500 rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition"
                  >
                    Generate New Room
                  </button>
                )}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(
                        restoredImage,
                        appendNewToName(photoName)
                      );
                    }}
                    className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
                  >
                    Download Generated Room
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
