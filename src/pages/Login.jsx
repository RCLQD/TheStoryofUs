import { div } from "framer-motion/client";
import { useState } from "react";

function Login({ onLogin }) {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const allowedFullName = "Langga";

    if (fullName.trim().toLowerCase() === allowedFullName.toLowerCase()) {
      setLoading(true);
      setTimeout(() => {
        onLogin(fullName);
        setLoading(false);
      }, Math.random() * 2000 + 1000);
    } else {
      setAlertVisible(true);
    }
  };

  return (
    <div className="login-container flex flex-col items-center justify-center h-screen bg-[#fefefe] text-white font-poppins">

      {alertVisible && (
        <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50 absolute top-5">
          <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
            <div className="flex gap-2">
              <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-red-500 font-bold">Incorrect Name</p>
                <p className="text-gray-400">Please click ⨉ to try again!</p>
              </div>
            </div>
            <button
              onClick={() => setAlertVisible(false)}
              className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <form onSubmit={handleLogin} className="bg-[#640d14] px-6 py-8 rounded shadow-md">
        <p className="mb-2">Remember The Name:</p>
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="What name do I call you?"
            required
            disabled={alertVisible}
            className={`w-64 p-2 border rounded-md focus:outline-[#640d14] ${alertVisible ? 'text-red-600 font-medium bg-white' : 'text-black'}`}
          />
          <button
            type="submit"
            disabled={loading || alertVisible}
            className="inline-flex items-center justify-center border bg-red-500 border-red-500 hover:bg-red-700 hover:border-red-700 text-white text-sm font-normal py-2 px-3 rounded-md shadow-lg transition-all duration-150 ease-in-out focus:outline-none group overflow-hidden relative"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <h1 className="text-base">Entering</h1>
                <div class="flex flex-row gap-1">
                  <div class="size-2 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
                  <div class="size-2 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
                  <div class="size-2 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
                </div>
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2 transition-transform duration-500 ease-in-out group-hover:translate-x-6"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path
                      strokeDasharray={36}
                      strokeDashoffset={36}
                      d="M13 4l7 0c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-7"
                    >
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
                    </path>
                    <path
                      strokeDasharray={14}
                      strokeDashoffset={14}
                      d="M3 12h11.5"
                    >
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate>
                    </path>
                    <path
                      strokeDasharray={6}
                      strokeDashoffset={6}
                      d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5"
                    >
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></animate>
                    </path>
                  </g>
                </svg>
                <span className="text-base transition-transform duration-1000 ease-in-out group-hover:translate-x-20 group-hover:opacity-100">
                  Enter
                </span>
              </>
            )}
          </button>
        </div>
      </form>s
    </div>
  );
}

export default Login;