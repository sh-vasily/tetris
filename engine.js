export class Engine{
    constructor(config, fieldFactory) {
        this.config = config;
        this.fieldFactory = fieldFactory;
        console.log(fieldFactory);
    }

    start() {
        let height = 50;
        let x = 0;
        var limit = 300;
        var figureHeight = 0;


        let createItem = () => this.fieldFactory.create();

        let item = this.fieldFactory.create();
        window.setInterval(function () {

            if (figureHeight > 6 * height) {
                alert("Game over!");
            }

            if (x > limit) {
                item = createItem();
                x = 10;
                limit -= height;
                figureHeight += height;
            }

            item.style.top = `${x += 10}px`;
        }, this.config.speed);


        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            switch (event.key) {
                case "ArrowDown":
                    // code for "down arrow" key press.
                    break;
                case "ArrowUp":
                    // code for "up arrow" key press.
                    break;
                case "ArrowLeft":
                    // code for "left arrow" key press.
                    let coord2 = Number(item.style.right.slice(0, -2));
                    coord2 += 1;
                    item.style.right = `${coord2}px`;
                    break;
                case "ArrowRight":
                    // code for "right arrow" key press.
                    let coord = Number(item.style.left.slice(0, -2));
                    coord += 1;
                    item.style.left = `${coord}px`;
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }, true);
    }
}