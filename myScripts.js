//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }
 // script.js
document.addEventListener('mousemove', (event) => {
    // Create a new sparkle element
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Set the position of the sparkle to where the mouse is
    const x = event.pageX;
    const y = event.pageY;
    sparkle.style.left = `${x - 10}px`;  // Adjust to center the image
    sparkle.style.top = `${y - 10}px`;   // Adjust to center the image
    
    // Append the sparkle to the container
    document.body.appendChild(sparkle);
    
    // Remove the sparkle after animation ends (1 second)
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });
  