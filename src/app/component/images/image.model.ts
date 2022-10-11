export class Image {
    public path: String;
    public data: any;
    public index:number;//

    constructor(imagePath: string, jsonData: string, n:number){
        this.path = imagePath;
        this.data = jsonData;
        this.index=n;//
    }
}
