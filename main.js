import { FigureFactory } from './figure-factory.js';
import { Engine } from './engine.js';
import engineConfig from './config.json' assert { type: 'json' };

export function main(){
    let fieldFactory = new FigureFactory(engineConfig.figures);
    let engine = new Engine(engineConfig, fieldFactory);
    
    engine.start();
}