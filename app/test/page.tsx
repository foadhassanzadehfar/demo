"use client";
import { redirect } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<{
    username: string;
    password: string;
    error: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log(data);
    setResponse(data);

    if (data.username === "sex") {
      redirect("/dashboard");
    }
  };

  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div
        className="flex-col justify-center items-center p-3 border-2 border-cyan-900 rounded-lg w-72
      "
      >
        <div className="flex justify-center items-center h-[64px]">
          <div>
            <h1 className="flex justify-center items-center  p-3 ">
              Login Page
            </h1>

            {response?.error && (
              <span className="text-sm text-red-700">{response.error}</span>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <div className="">Username</div>
              <div className="mb-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-slate-500/30 w-full outline-0 rounded-sm py-1 pl-2 "
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              <div className="">Password</div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-500/30 w-full outline-0 rounded-sm py-1 pl-2 "
                />
              </div>
            </label>
          </div>
          <button
            className="w-full  bg-gray-800 text-sm  p-3 rounded-md hover:bg-slate-500 text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>

      <div className="hidden">
        {response && (
          <div>
            <div>{response.username}</div>
            <div>{response.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}
