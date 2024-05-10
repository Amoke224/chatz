"use client";
import { toast } from "sonner";
export default function Home() {
  return (
    <div className="text-center">
      <h1>Hi mom!</h1>
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </div>
  );
}
