"use client";
import { From } from "@/components/from/From";
import { Products } from "@/components/users/Products";
import { decrement, increment } from "@/redux/feactures/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const value = useSelector((state) => state.home.value);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#202020] text-white">
      <h1>Spotify {value}</h1>
      <button
        className="border"
        onClick={() => {dispatch(increment())}}>
        increment
      </button>
      <button
        className="border"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <div>
        <Products/>
        <From/>
      </div>
    </main>
  );
}
