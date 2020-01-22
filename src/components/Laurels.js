import React from "react"
import PropTypes from "prop-types"

const Laurels = ({ laurels }) => {
  return (
    <div className="laurels">
      {laurels.map((laurel, index) => (
        <img key={index} src={laurel.image} alt="Festival Laurel" />
      ))}
    </div>
  )
}

Laurels.propType = {
  laurels: PropTypes.object
}

export default Laurels
