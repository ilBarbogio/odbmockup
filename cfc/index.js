function changeColor(ev){
  switch(ev.target.getAttribute("kind")){
    case "design":
      document.body.style.setProperty("--design-color",ev.target.value)
      break
    case "designLight":
      document.body.style.setProperty("--design-color-light",ev.target.value)
      break
    case "fold":
      document.body.style.setProperty("--fold-color",ev.target.value)
      break
    case "foldLight":
      document.body.style.setProperty("--fold-color-light",ev.target.value)
      break
    case "diagram":
      document.body.style.setProperty("--diagram-color",ev.target.value)
      break
    case "diagramLight":
      document.body.style.setProperty("--diagram-color-light",ev.target.value)
      break
    default: break
  }
}