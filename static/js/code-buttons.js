function codeCopy(id) {
    const block = document.getElementById(id);
    const button = block.getElementsByTagName("button")[0];
    console.log(button)
    const all_code = block.getElementsByTagName("code");
    const code = all_code[all_code.length-1];
    let copy_lines = [];
    for (let line of code.querySelectorAll(':scope > span')) {
        copy_lines.push(line.innerText);
    }
    navigator.clipboard.writeText(copy_lines.join("")).then(function () {
        /* Chrome doesn't seem to blur automatically,
           leaving the button in a focused state. */
        button.blur();

        // TODO: flash code block too?
        button.getElementsByTagName("i")[0].classList.remove("fa-copy");
        button.getElementsByTagName("i")[0].classList.add("fa-check");

        setTimeout(function () {
            button.getElementsByTagName("i")[0].classList.add("fa-copy");
            button.getElementsByTagName("i")[0].classList.remove("fa-check");
        }, 2000);
    }, function (error) {
        button.getElementsByTagName("i")[0].classList.remove("fa-copy");
        button.getElementsByTagName("i")[0].classList.remove("fa-check");
        button.getElementsByTagName("i")[0].classList.add("fa-x");
    });
}


function codeExpand(id) {
    const block = document.getElementById(id);
    const button = block.getElementsByTagName("button")[1];
    block.classList.toggle("code-expanded")
    button.blur();

}