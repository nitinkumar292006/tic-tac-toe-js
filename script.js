document.addEventListener("DOMContentLoaded", function () {
    let Boxes = document.querySelectorAll(".box");
    let reset_button = document.querySelector("#reset"); // Ensure correct ID
    let result = document.querySelector(".result");
    let msg = document.querySelector(".win");
    let start_button = document.querySelector(".start-again");
    let change = true;

    const PatternAlgo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const reset = () => {
        change = true;
        result.style.display = "none"; // Hide result message
        Boxes.forEach((box) => {
            box.innerHTML = ""; // Clear X and O
            box.style.pointerEvents = "auto"; // Enable clicking again
        });
    };

    Boxes.forEach((box) => {
        box.addEventListener("click", function () {
            if (change) {
                box.innerHTML = "X";
                box.style.color = "lightblue"
                change = false;
            } else {
                box.innerHTML = "O";
                box.style.color = "gray"
                change = true;
            }
            box.style.pointerEvents = "none"; // Disable clicking on this box
            checkWinner();
        });
    });

    const checkWinner = () => {
        for (let pattern of PatternAlgo) {
            let pos1val = Boxes[pattern[0]].innerHTML;
            let pos2val = Boxes[pattern[1]].innerHTML;
            let pos3val = Boxes[pattern[2]].innerHTML;

            if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    result.style.display = "block";
                    msg.innerHTML = `PLAYER ${pos1val} WINS !!`;
                    disableBoxes();
                }
            }
        }
    };

    const disableBoxes = () => {
        Boxes.forEach((box) => {
            box.style.pointerEvents = "none"; // Disable all boxes
        });
    };

    // ✅ Ensure event listener is attached properly
    reset_button.addEventListener("click", reset);
    start_button.addEventListener("click", reset);
});
