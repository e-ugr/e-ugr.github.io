let tui_num = localStorage["tui"] ? localStorage["tui"] : "1234567";
JsBarcode("#barcode", tui_num, {
    format: "code39",
    lineColor: "#000",
    displayValue: true
});

document.querySelector("#save_tui").addEventListener("click", function(e) {
    localStorage["tui"] = document.querySelector("#tui_num").value.toString();
    location.reload(true);
});

document.querySelector("#delete_tui").addEventListener("click", function(e) {
    localStorage.clear("tui");
    location.reload(true);
});

document.querySelector("#delete_image").addEventListener("click", function(e) {
    localStorage.clear("imgTUI");
    location.reload(true);
});

var upload = document.getElementById('upload_tui');
var res = document.getElementById("res");
var img = document.getElementById("tui-pic");
var tui_load = document.getElementById("tui_load");

upload.addEventListener("change", function(e) {
    tui_load.classList.remove("is-hidden");

    var file = this.files[0];
    document.querySelector("#file_name").textContent = file.name;
    var maxSize = 6000000; //6Mb

    if (file.type.indexOf('image') < 0) {
        res.innerHTML = "Formato no valido";
    } else {
        var fReader = new FileReader();
        fReader.onload = function() {
            img.onload = function() {
                try {
                    localStorage.setItem("imgTUI", getBase64Image(img, (file.size / maxSize), file.type));
                } catch (e) {
                    var msg = e.message.toLowerCase();

                    if (msg.indexOf('storage') > -1 || msg.indexOf('quota') > -1) {
                        if (file.type.match(/jpe?g/)) {
                            console.log("Reduciendo calidad");
                            localStorage.setItem("imgTUI", getBase64Image(img, (file.size / maxSize), file.type, 0.7));
                        } else {
                            console.log('Reduciendo tamaño');
                            var maxPxSize = 750000,
                                imgSize = (img.width * img.height);
                            localStorage.setItem("imgTUI", getBase64Image(img, (imgSize / maxPxSize), file.type));
                        }
                    }
                }
            }
            img.src = fReader.result;
        }
        fReader.readAsDataURL(file);
    }

    tui_load.classList.add("is-hidden");
});

//Función que encontré alguna vez en stackoverflow. No tengo la referencia :(
function getBase64Image(img, sizeRatio, type, quality) {
    // if we've got an svg, don't convert it, svg will certainly be less big than any pixel image
    if (type.indexOf('svg+xml') > 0) return img.src;

    // if we've got a jpeg
    if (type.match(/jpe?g/)) {
        // and the sizeRatio is okay, don't convert it
        if (sizeRatio <= 1) return img.src;
    }
    // if we've got some other image type
    else type = 'image/png';

    if (!quality) quality = 1;
    var canvas = document.createElement("canvas");
    // if our image file is too large, then reduce its size
    canvas.width = (sizeRatio > 1) ? (img.width / sizeRatio) : img.width;
    canvas.height = (sizeRatio > 1) ? (img.height / sizeRatio) : img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // if we already tried to reduce its size but it's still failing, then reduce the jpeg quality
    var dataURL = canvas.toDataURL(type, quality);

    return dataURL;
}

//Conseguir la TUI desde memoria
function retriveTUI() {
    var data = localStorage.getItem('imgTUI');
    img.src = data;
}
retriveTUI();
