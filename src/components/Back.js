import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const navigate = useNavigate()
  return (
    <p
    onClick={() => navigate(-1)}
    className="text-lg  hover:bg-gray-200 transition-all cursor-pointer bg-white px-3 py-1 rounded-md"
  >
    <i className="fa-solid fa-arrow-left"></i> Back
  </p>
  )
}

export default Back