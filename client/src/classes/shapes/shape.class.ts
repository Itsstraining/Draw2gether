import { Point } from "../../classes/point.class";


export interface Shape{
    startPoint: Point;
    endPoint: Point;
    color: string;

    draw(ctx: any): any;
    fillColor(color: string): any;
    strokeColor(color: string): any;
}



