import { useState } from "react";

function Login({ onLogin }) {
  const [fullName, setFullName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const allowedFullName = "Langga";

    if (fullName.trim().toLowerCase() === allowedFullName.toLowerCase()) {
      onLogin(fullName);
    } else {
      alert("Name Not Recognized.");
    }
  };

  return (
    <div className="login-container flex flex-col items-center justify-center h-screen bg-[#fefefe] text-white font-poppins">
      <form onSubmit={handleLogin} className="bg-[#640d14] px-6 py-8 rounded shadow-lg">
        <p className="mb-2">Remember The Name:</p>
        <div className="flex items-center gap-x-2">
            <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="What name do I call you?"
                required
                className="w-64 p-2 border rounded text-black"
            />
            <button
                type="submit"
                className="bg-red-500 border-[1.5px] border-red-500 hover:bg-red-700 hover:border-red-700 text-white font-medium py-2 px-6 rounded active:scale-95"
            >
            Enter
            </button>
        </div>
      </form>
    </div>
  );
}

export default Login;