function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "left" value*/
    const new = 3 * event.pageX / window.innerWidth;
    /* Update */
    element.style["left"] = new + "vmin";
}

document.addEventListener('click', hello(event));

function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "x" value*/
    const x = 3 * event.pageX / window.innerWidth;
    /* Find the new "y" value*/
    const y = 3 * event.pageY / window.innerHeight;
    /* Update */
    element.style["left"] = x + "vmin";
    element.style["top"] = y + "vmin";
}

document.addEventListener('click', hello(event));