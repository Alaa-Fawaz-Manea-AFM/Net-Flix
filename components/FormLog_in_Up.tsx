"use client";
import { handle_Log_In_Fun, handle_sign_In_Fun } from "@/utils/api";
import { useContext, useRef, useState } from "react";
import { MyContext } from "@/context/MyState";
import { useRouter } from "next/navigation";
import { IForm } from "@/types";
import Loader from "./Loader";
import Link from "next/link";

type IForm_Log_In_Up = {
  title: "Log In" | "Sign Up";
  link: "login" | "signup";
};

const FormLog_in_Up = ({ title, link }: IForm_Log_In_Up) => {
  const { userEmail, setUserEmail, setUserId } = useContext<any>(MyContext);
  const [form, setForm] = useState<IForm>({
    email: userEmail || "",
    password: "",
  });
  const checkRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(
    checkRef.current?.checked || false
  );
  let router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleLog_In_Up_Fun = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { password, email }: IForm = form;
    setLoading(true);
    if (title == "Log In") {
      await handle_Log_In_Fun(
        router,
        email,
        password,
        setForm,
        setUserId,
        setLoading,
        setUserEmail
      );
    } else {
      await handle_sign_In_Fun(
        router,
        email,
        password,
        setForm,
        setLoading,
        setUserEmail
      );
    }
  };

  return (
    <>
      <form onSubmit={handleLog_In_Up_Fun} className="flex flex-col gap-5">
        <input
          type="email"
          name="email"
          autoFocus={userEmail ? false : true}
          value={userEmail || form?.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 text-lg rounded-md outline-none"
        />
        <input
          type="password"
          name="password"
          value={form?.password}
          autoFocus={userEmail ? true : false}
          onChange={handleChange}
          placeholder="password"
          className="p-2 text-lg rounded-md outline-none"
        />
        <button
          disabled={loading || check}
          className={`${
            loading || check
              ? "cursor-not-allowed opacity-50"
              : "hover:opacity-90"
          } bg-red-700 py-1 rounded-md text-2xl font-semibold leading-normal`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader /> {title}...
            </span>
          ) : (
            <span>{title}</span>
          )}
        </button>
      </form>
      <div className="flex flex-col gap-10 text-gray-400">
        <div className="flex items-center justify-between">
          <div
            className={`${
              check ? "border rounded-md border-red-500" : "border-0"
            } flex items-center p-1 gap-2`}
          >
            <input
              aria-label="checkbox"
              onClick={() => setCheck((pre) => !pre)}
              ref={checkRef}
              defaultChecked
              type="checkbox"
              name="checkbox"
            />
            Remember My
          </div>
          Need Help?
        </div>
        <span>
          New to Netflix?{" "}
          <Link
            href={`/${link}`}
            onClick={() => {
              setUserEmail("");
            }}
            className="text-white"
          >
            {link}
          </Link>
        </span>
      </div>
    </>
  );
};

export default FormLog_in_Up;
