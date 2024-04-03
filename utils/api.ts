import {
  doc,
  query,
  updateDoc,
  onSnapshot,
  collection,
  arrayUnion,
  Timestamp,
  setDoc,
} from "firebase/firestore";

import { IForm, IMovieDetail, IUsers } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { auth, fireDB } from "./firebase";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Links = ["Popular", "Trending", "Horror", "Heart"];

export const key = process.env.NEXT_PUBLIC_MOVIES_APP_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const request: any = {
  requestPopular: `${BASE_URL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${key}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${key}&with_networks=213`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${key}&language=en-US&with_genres=28`,
  requestHorror: `${BASE_URL}/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
};

export const arrReq = [
  { name: "Popular", req: "requestPopular" },
  { name: "Trending", req: "fetchTrending" },
  { name: "NetflixOriginals", req: "fetchNetflixOriginals" },
  { name: "ActionMovies", req: "fetchActionMovies" },
  { name: "Horror", req: "requestHorror" },
];

export const getUserData = async (
  setUser: Dispatch<SetStateAction<IUsers[]>>
) => {
  const q = await query(collection(fireDB, "users"));
  onSnapshot(q, (QuerySnapshot) => {
    let heart: any = [];
    QuerySnapshot.forEach((doc) => {
      heart.push(doc?.data());
    });
    setUser(heart);
  });
};

export const getData = async (req: string) => {
  let response = await fetch(req, {
    next: { revalidate: 120 },
  });
  const { results }: { results: IMovieDetail[] } = await response.json();
  return results;
};

export const getDataDetails = async (movieId: string) => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    { next: { revalidate: 120 } }
  );
  return await response.json();
};

export const removeMyHeart = async (
  userinfo: { heart: any[] },
  userId: string,
  id: string
) => {
  try {
    let heartFilter = userinfo.heart?.filter((i) => i.id !== id);
    await updateDoc(doc(fireDB, "users", userId), {
      heart: heartFilter,
    });
    toast.success("Remove Film from My Heart");
  } catch (error) {
    toast.error("Failed to Remove Film from My Heart");
  }
};

export const gethandleAddHeart = async (
  userinfo: { heart: IMovieDetail[] },
  userId: string,
  movie: { id: string }
) => {
  const isMovieInHeart = userinfo?.heart?.some((item) => item.id === movie.id);
  if (!isMovieInHeart) {
    try {
      await updateDoc(doc(fireDB, "users", userId), {
        heart: arrayUnion(movie),
      });
      toast.success("Added to My Heart");
    } catch (error) {
      toast.error("Failed to Add to My Heart");
    }
  } else {
    toast.error("Movie already in My Heart");
  }
};

export const handle_Log_In_Fun = async (
  router: any,
  email: string,
  password: string,
  setForm: Dispatch<SetStateAction<IForm>>,
  setUserId: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setUserEmail: Dispatch<SetStateAction<string>>
) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user_NETFLIX", JSON.stringify(result?.user?.uid));
    setUserEmail("");
    setUserId(result?.user?.uid);
    setForm({ email: "", password: "" });
    toast.success("Log In Successfully");
    router.push("/");
  } catch (error) {
    toast.error("Log In Failed");
  } finally {
    setLoading(false);
  }
};

export const handle_sign_In_Fun = async (
  router: any,
  email: string,
  password: string,
  setForm: Dispatch<SetStateAction<IForm>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setUserEmail: Dispatch<SetStateAction<string>>
) => {
  try {
    const users = await createUserWithEmailAndPassword(auth, email, password);
    const user = {
      uid: users.user.uid,
      email,
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    const userRef = collection(fireDB, "users");
    await setDoc(doc(userRef, users?.user?.uid), {
      user,
    });
    setUserEmail(email);
    setForm({ email: "", password: "" });
    toast.success("Sign up Succesfully");
    router.push("/login");
  } catch (err) {
    toast.error("Sign Up Failed");
  } finally {
    setLoading(false);
  }
};
