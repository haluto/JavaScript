
function formchanged() {
    console.log("formchanged");
    
    let element = document.getElementById("file-input");
    
    console.log(element.value);
    
    let fileReader = new FileReader();
    
    fileReader.onload = function() {
        console.log("file loaded.");
    }
    fileReader.readAsDataURL(element.value);
    
    /*
    let fileReader = new FileReader(),
        fileType = this.files[0].type;
    fileReader.onload = function() {
        if(/^image/.test(fileType)) {
            $(`<img src="${this.result}">`).appendTo("body");
        }
    }
    */

    //fileReader.readAsDataURL(this.files[0]);
}