const lights = document.querySelectorAll(".light");
const offLights = document.getElementById("off");
const onLights = document.getElementById("on");



function on(){
    onLights.addEventListener('click', () => {
        lights.forEach(light => {
            var setInt = setInterval(() => {
            light.classList.toggle("active");
        }, 2000);

        
        });
    })

}
on();
function off(){
    offLights.addEventListener('click', () => {
        lights.forEach(light => {
            var remInt = setInterval(() => {
            light.classList.remove("active");
        }, 5000);

        
        });
    })

}
off();



