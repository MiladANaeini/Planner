"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateFrom() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);


const onSubmit= async (e) => {
  e.preventDefault()
  setIsLoading(true)
  
  let ticket = {
    title, body, priority, user_email:'milad.naeini11@gmail.com'
  }
  const res = await fetch('http://localhost:4000/tickets', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(ticket)
  })
  if (res.status === 201) {
    router.refresh()
    router.push('/tickets')
  }
}


  return (
    <form onSubmit={onSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
        required
        type="text"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
        required
        onChange={(e)=> setBody(e.target.value)}
        value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
        required
        onChange={(e)=> setPriority(e.target.value)}
        value={priority}
        >
        <option value="">Choose Option</option>
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
        </select>
      </label>
      <button
      className="btn-primary"
      disable={isLoading}
      type="onSubmit"
      >
        {isLoading && <span>Loading...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  )
}
