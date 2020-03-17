import system from "system-components" // provides cleaner styled system css functions to style reusable components via props
import styled from "styled-components"
import css from "@styled-system/css" // allows sass like nesting and access to theme file

// Layout
export const Wrapper = system(
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1020px",
    m: "0 auto",
    p: "1.45rem 1.0875rem",
  },

  "flexWrap",
  "minHeight",
  "fontSize",
  "textAlign",
)

// Text
export const Text = system("space", "color", "fontSize")

// Image
export const Image = system(
  // defaults
  // System-components automatically applies styled-system functions based on the keys of the default values object.
  {
    is: "img",
  },
  // props
  // Styled System functions ... only what is being used as props on Image component
  "space",
  "height",
  "width",
  "minWidth",
  "maxWidth",
  "borderRadius"
)

// Header
export const StyledHeader = styled.header(
  css({
    bg: "black",

    ".site-title": {
      m: 0,

      ".link": {
        color: "white",
        textDecoration: "none",

        ".logo": {
          w: "50px",
          mb: 0,
          bg: "blue",
          borderRadius: 6,
        },

        ".title": {
          letterSpacing: "2px",
          fontWeight: 6,
        },
      },
    },

    nav: {
      ".nav-link": {
        color: "white",
        fontFamily: "'Raleway', sans-serif",
        letterSpacing: "1px",
        textDecoration: "none",

        "&:hover": {
          color: "orange",
        },

        "&:first-child": {
          mr: 3,
        },
      },
    },
  })
)

// Footer
export const StyledFooter = styled.div(
  css({
    bg: "black",
    color: "white",
    a: {
      color: "link",
      ml: 1,

      "svg.svg-inline--fa.fa-instagram.fa-w-14": {
        fontSize: 3,
        ml: 1,
        position: "relative",
        top: "2px",
        color: "pink",
        transition: "color .3s",

        "&:hover": {
          color: "white",
        },

        li: {
          listStyle: "none",
        },
      },
    },
  })
)

// Video
export const StyledVideo = styled.div(
  css({
    ".video": {
      m: "0 auto",
      maxWidth: 7,
      p: "1.45rem 1.0875rem 0",

      ".video-meta": {
        fontSize: [0, 1, 2],
        p: 4,
        borderRadius: 3,

        ".director": {
          mb: "0",
        },

        ".logline": {
          mb: "0",
          maxWidth: 6,
        },
      },

      ".video-embed": {
        position: "relative",
        /* 16:9 */
        height: "0",
        pb: ["66%", "62%", null],

        iframe: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
      },
    },

    "&.tropical-gardens": {
      bg: "blue",

      ".video-meta": {
        bg: "lightBlue",
      },

      ".video-embed": {
        pt: 0,
        pb: ["62%", "57%", "55%"],
      },
    },

    "&.circles": {
      bg: "orange",

      ".video-meta": {
        bg: "lightOrange",
      },
    },
  })
)

// About
export const StyledBio = styled.div(
  css({
    bg: "lightBlue",

    p: {
      mt: 3,
    },
  })
)

// Pipeline
// The components are one-offs and not reused or styled through props
// but I am using system from system-components
// to keep styles consistant across the board
// and to be able to use the objects from the theme file.
// Right now default styles are set but I could add
// the functions from system-components and style via component props

export const StyledPipeline = system({
  bg: "black",
  color: "white",
})

export const Stage = system({
  flex: "50%",
})

export const StageTitle = system({
  is: "h2",
  color: "orange",
})

export const Projects = system({
  display: "flex",
  flexDirection: "column",
  mb: [4, null, 0],
})

export const Project = system({
  display: "flex",
  flexDirection: "column",
  mb: 4,
  fontSize: 3,
})

// 404
export const Giphy = system(
  // Styled System functions ... only what is being used as props on Giphy component
  "display",
  "minHeight",
  "space",
  "color",
  "borders",
  "borderColor",
  "borderRadius"
)