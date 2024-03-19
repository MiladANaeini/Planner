"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateTickets() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);



  return (
    <form className="w-1/2">
      <label>
        <span>Title:</span>

      </label>
    </form>
  )
}
