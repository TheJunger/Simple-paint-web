const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const dif = canvas.getBoundingClientRect();

let painting,color,linewidth = false;

canvas.addEventListener("mousedown", e =>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.querySelector(".color").value        
    linewidth = document.querySelector(".lw").value
    ctx.beginPath()
})

canvas.addEventListener("mousemove", e =>{
    if (painting){
        dibujar(difX,difY,e.clientX - dif.left ,e.clientY - dif.top)
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
})

canvas.addEventListener("mouseup",()=>{
    ctx.closePath()
    painting = false
})

const dibujar = (x1,y1,x2,y2)=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}

const botonBorrar = document.querySelector(".borrar");
botonBorrar.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  })