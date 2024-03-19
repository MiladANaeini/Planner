import React, { Suspense } from 'react'
import TicketsList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>
            Tickets
          </h2>
          <p><small>
            Current open tickets
            </small></p>
            <Link href="http://localhost:3000/create" className='text-gray-500'>
          <button className="btn-primary">
            Create Ticket
          </button>
            </Link>
        </div>
      </nav>
      <Suspense fallback={<Loading/>}>
      <TicketsList/>
      </Suspense>
      </main>
  )
}

export default Tickets