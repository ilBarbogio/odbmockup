function changeColor(ev){
  switch(ev.target.getAttribute("kind")){
    case "design":
      document.querySelector("label.design").innerHTML=ev.target.value
      document.body.style.setProperty("--design-color",ev.target.value)
      break
    case "designLight":
      document.querySelector("label.designLight").innerHTML=ev.target.value
      document.body.style.setProperty("--design-color-light",ev.target.value)
      break
    case "fold":
      document.querySelector("label.fold").innerHTML=ev.target.value
      document.body.style.setProperty("--fold-color",ev.target.value)
      break
    case "foldLight":
      document.querySelector("label.foldLight").innerHTML=ev.target.value
      document.body.style.setProperty("--fold-color-light",ev.target.value)
      break
    case "diagram":
      document.querySelector("label.diagram").innerHTML=ev.target.value
      document.body.style.setProperty("--diagram-color",ev.target.value)
      break
    case "diagramLight":
      document.querySelector("label.diagramLight").innerHTML=ev.target.value
      document.body.style.setProperty("--diagram-color-light",ev.target.value)
      break
    default: break
  }
}