import React from "react"
import spotlight from "../images/laurels/spotlight.jpg"
import dumbo from "../images/laurels/dumbo.jpg"
import riverrun from "../images/laurels/riverrun.jpg"
import strangerDays from "../images/laurels/stranger-days.png"
import atlantaComedy from "../images/laurels/atlanta-comedy.jpg"

const Laurels = () => {
  const laurels = [
    {
      image: spotlight,
    },
    {
      image: dumbo,
    },
    {
      image: riverrun,
    },
    {
      image: strangerDays,
    },
    {
      image: atlantaComedy,
    },
  ]
  return (
    <div className="laurels">
      {laurels.map((laurel, index) => (
        <img key={index} src={laurel.image} alt="Festival Laurel" />
      ))}
    </div>
  )
}

export default Laurels
