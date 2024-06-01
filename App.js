const heading=React.createElement("h1",{id:"heading"},"hello world by React!");
const root=ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement(
  "div",
  {id:"parent"},
  React.createElement(
    "div",
    {id:"child"},
    [React.createElement(
      "h1",
      {id:"parent"},
      "I'm h1 Tag!"
    ),React.createElement(
      "h2",
      {id:"parent"},
      "I'm h2 Tag!"
    )]
    
  )

)
root.render([heading, parent,heading,parent]);