import { logo } from "@/assets";
import Tasks from "@/components/Tasks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <header>
          <Image src={logo} alt="Logo"/>
          <h1>My Task Board</h1>
        </header>

        <p>Tasks to keep organised</p>

        <Tasks/>
    </div>
  );
}
