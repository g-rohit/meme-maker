//function for displaying the image upload preview

function showMyImage(fileInput) {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {           
        var file = files[i];
        var imageType = /image.*/;     
        if (!file.type.match(imageType)) {
            continue;
        }           
        var img=document.getElementById("imageGoesHere");            
        img.file = file;    
        var reader = new FileReader();
        reader.onload = (function(aImg) { 
            return function(e) { 
                aImg.src = e.target.result; 
            }; 
        })(img);
        reader.readAsDataURL(file);
    }    
}


// writing the caption
 

function submitCaption() {
var caption = document.getElementById('theText').value;
document.getElementById('memeCaption').innerHTML = caption;
}


// // saving the meme as image
// $(function() { 
//     $("#btnSave").click(function() { 
//         html2canvas($("#MemeLayout"), {
//             onrendered: function(canvas) {
//                 theCanvas = canvas;
//                 document.body.appendChild(canvas);

//                 // Convert and download as image 
//                 Canvas2Image.saveAsPNG(canvas); 
//                 $("#img-out").append(canvas);
//                 // Clean up 
//                 //document.body.removeChild(canvas);
//             }
//         });
//     });
// }); 
