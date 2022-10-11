export class Word {
    public text: string;
    public box: number[];

    constructor(textValue: string, boxValue: number[]){
        this.text = textValue;
        this.box = boxValue;
    }
}

export class ImageElement {
    public id: number;
    public text: string;
    public box: number[];
    // public linking: ;
    public label: string;
    public words: Word;

    constructor(idValue: number, textValue: string, boxData: number[], labelValue: string, wordsData: Word){
        this.id = idValue;
        this.text = textValue;
        this.box = boxData;
        this.label = labelValue;
        this.words = wordsData;
    }
}