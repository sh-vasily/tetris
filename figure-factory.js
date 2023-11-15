export class FigureFactory{

    constructor(supportedFigures){
        this.supportedFigures = supportedFigures;
    }

    create(){
        let randomFigure =  this.#getRandomFigure();   
        const currentDiv = document.getElementById("game-field");
        currentDiv.appendChild(randomFigure);
        return randomFigure;
    }

    #getRandomFigure(){
        let figure = this.supportedFigures[Math.floor(Math.random() * this.supportedFigures.length)];

        let figureElemment = document.createElement("div");

        switch(figure){
            case 'I':
                figureElemment.style.position = 'absolute';
                figureElemment.style.backgroundColor = 'blue';
                figureElemment.style.width = '10px';
                figureElemment.style.height = `${50}px`;
                break;
            case '0':
                figureElemment.style.position = 'absolute';
                figureElemment.style.backgroundColor = 'blue';
                figureElemment.style.width = '50px';
                figureElemment.style.height = `${50}px`;
                break;    
        }

        return figureElemment;
    }
}