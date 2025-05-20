
table();
function table() {
    $(".table__inner.has-func").each(function() {
        let th_height = $(this).find(".table__main").find("th").children("span").height() + 40;
        $(this).find(".table__function").find("th").children("span").css("height",th_height);
        $(this).find(".table__main").find(".table__tr").each(function(i) {
            let length = $(this).find("td").length;
            let max_height = 0;
            for(let j=0;j<length;j++) {
                let td_height = $(this).find("td").eq(j).find("span").height() + 60;
                if(td_height >= max_height) {
                    max_height = td_height;
                }
            }
            $(this).parents(".table__inner").find(".table__function").find(".c-table-btns__wrapper").eq(i).css("height",max_height);
        })

        let func_width = $(this).find(".table__function").width();
        $(this).css("padding-right",func_width);
    })
}




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