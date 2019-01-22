(function body() {
    /** global scope variable */
    const layout = document.getElementById("pixelCanvas");
    const sizePicker = document.getElementById("sizePicker");
    const colorPicker = document.getElementById("colorPicker");

    /**adding listner for grid size.*/
    sizePicker.addEventListener('submit', function () {

        /** Stops the default action of an element from happening. */
        event.preventDefault();

        /** initiating let instead of const as value kept changing. */
        let width = document.getElementById("inputWidth").value;
        let height = document.getElementById("inputHeight").value;
        makeGrid(width, height);
    })


    /** change the color of the clicked cell */
    function changeColor() {
        this.style.background = colorPicker.value;
    }


    /** make grid */
    function makeGrid(x, y) {
        /** innerHTML property can change's page content without refreshing the page. */
        layout.innerHTML = '';

        /** 'You can pick where the color will be added to the table' + 
           'You can only add one color to a list at a time.' + 
           'Each value you insert to a list is considered one element and thats why insert is use instead of append' */
        for (let row = 1; row <= x; row++) {
            let newRow = layout.insertRow();

            /** insert cell inside of newRow */
            for (let cell = 1; cell <= y; cell++) {
                let newCell = newRow.insertCell();
                newCell.onclick = changeColor;
            }
        }
    }

})();