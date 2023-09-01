import React from "react";
import { useCreatProductMutation } from "@/redux/feactures/userApi";
export const From = () => {
  const [createProduct] = useCreatProductMutation();
  const handelSubmit = (e) => {
    e.preventDefault();
    const id = (Math.random() * 1000).toFixed();
    const title = e.target.elements.title.value.trim();
    const description = e.target.elements.description.value.trim();
    const compled = e.target.elements.compled.checked;
    createProduct({
      title,
      description,
      compled
    });
  };
  return (
    <div>
      <form onSubmit={handelSubmit} className="flex flex-col gap-3">
        <label htmlFor="">title</label>
        <input type="text" name="title" className="text-black" />
        <label htmlFor="">description</label>
        <input type="text" name="description" className="text-black" />
        <label htmlFor="">compled</label>
        <input type="checkbox" name="compled" className="text-black" />
        <button className="text-white">Enviar</button>
      </form>
    </div>
  );
};
