import React from 'react'
import { Link } from 'react-router-dom'

function Copyrightfooter() {
  return (
    <div className="text-center p-4 bg-rgba(0, 0, 0, 0.05)">
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