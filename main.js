import { FigureFactory } from './figure-factory.js';
import { Engine } from './engine.js';

export function main(){
    let fieldFactory = new FigureFactory(['I', '0']);
    let engineConfig = {
        speed: 10000
    };
    let engine = new Engine(engineConfig, fieldFactory);
    
    engine.start();
}