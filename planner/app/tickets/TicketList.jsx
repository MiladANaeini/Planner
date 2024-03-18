async function getTickets(){
  const res = await fetch('http://localhost:4000/tickets')

  return res.json();
}
async function TicketsList() {
  const tickets = await getTickets()

  return (
    <div>
       {tickets ? (
           <>
           {tickets.map((ticket)=>
           <div key={ticket.id} className="card my-5">
             <h3>
              {ticket.title}
             </h3>  
             <p>{ticket.body.slice(0,200)}...</p>
             <div className={`pill ${ticket.priority}`}>
               {ticket.priority} Priority
             </div>
           </div>
           )}
           </>
             ) : (
           <>
              <p className="text-center">
                No Ticket is open
              </p>
            </>
          )}
    </div>
  )
}

export default TicketsList