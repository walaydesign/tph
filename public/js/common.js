




let input_file = $(".c-form-item-file__upload");
input_file.change(function(e) {
    let file = $(this).parents(".c-form-item-file");
    file.addClass("uploaded");

    readURL(e.target, file);
})

let reupload = $(".btn-upload");
reupload.change(function(e) {
    let file = $(this).parents(".c-form-item-file");
    readURL(e.target, file);
})


function readURL(target, file) {
    let img = file.find(".c-form-item-file__pic-main").find("img");
    if(target.files && target.files[0]){
        let reader = new FileReader();
        reader.onload = function (e) {
            img.attr('src', '');
            img.attr('src', e.target.result);
        }
        reader.readAsDataURL(target.files[0]);
    }   
}