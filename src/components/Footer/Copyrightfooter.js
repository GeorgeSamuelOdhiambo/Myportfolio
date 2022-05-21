import React from 'react'
import { Link } from 'react-router-dom'

function Copyrightfooter() {
  return (
    <div className="text-center p-4 bg-light">
        © {new Date().getFullYear()} Copyright:
        <Link
          to=""
          className="text-reset fw-bold"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Odhiambo George
        </Link>
      </div>
  )
}

export default Copyrightfooter