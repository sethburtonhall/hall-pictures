import spotlight from "../images/laurels/spotlight.jpg"
import dumbo from "../images/laurels/dumbo.jpg"
import riverrun from "../images/laurels/riverrun.jpg"
import strangerDays from "../images/laurels/stranger-days.png"
import atlantaComedy from "../images/laurels/atlanta-comedy.jpg"

// Films/Home
export const films = [
  // The video title should be all lower case and include dashes between words.
  // This will allow for '.title-name' styling in 'video.scss'
  // and 'Video.js' will replace '-' with spaces to display title correctly
  {
    title: "tropical-gardens",
    logline:
      "A down and out loner copes with his recent heartbreak by obsessing over a mini-golf course record.",
    director: "Morten Savage",
    producer: "Seth Hall",
    url: "https://player.vimeo.com/video/327592520",
    hasLaurels: true,
    laurels: [
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
    ],
  },
  {
    title: "circles",
    logline:
      "A frail and helpless 18-year-old finds himself in a wilderness rehabilitation program with a second chance to make his way in the world.The problem is that he refuses to get out of his tent.",
    director: "Morten Savage",
    producer: "Seth Hall",
    url: "https://player.vimeo.com/video/284174147",
    hasLaurels: false,
  },
]

// About
export const pipeline = [
  {
    stage: "Development",
    projects: [
      {
        name: "Rubber Chicken",
        type: "web series |",
        genre: "comedy",
      },
      {
        name: "8am",
        type: "short film |",
        genre: "drama",
      },
    ],
  },
  {
    stage: "Pre-Production",
    projects: [{ type: "TBD" }],
  },
  {
    stage: "Production",
    projects: [{ type: "TBD" }],
  },
  {
    stage: "Post Production",
    projects: [
      {
        name: "The Dream",
        type: "short film |",
        genre: "social horror",
      },
      {
        name: "Morning Routine",
        type: "short film |",
        genre: "drama",
      },
    ],
  },
]
