import { Component, Input} from'@angular/core';

@Component ({
    selector: 'app-counting',
    templateUrl : './counting.componet.html',
    styleUrls: ['./counting.componet.css']
    
})

export class Counting {
    @Input()
    names:string;
    counts = 0;
    counted = 0 ;
    constructor() {


    }

    reset(){
        this.names = null;
    }
    countNumber(){
        this.counts = this.counts+1 ;
        this.counted = this.counts-1 ;
    }
    clear(){
        this. counts = 0;
        this. counted = 0;
    }
}