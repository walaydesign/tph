
table();
function table() {
    $(".table__inner.has-func").each(function() {
        // let th_height = $(this).find(".table__main").find("th").children("span").height() + 20;
        // $(this).find(".table__function").find("th").children("span").css("height",th_height);
        // $(this).find(".table__main").find(".table__tr").each(function(i) {
        //     let length = $(this).find("td").length;
        //     let max_height = 0;
        //     for(let j=0;j<length;j++) {
        //         let td_height = $(this).find("td").eq(j).find("span").height() + 20;
        //         if(td_height >= max_height) {
        //             max_height = td_height;
        //         }
        //     }
        //     $(this).parents(".table__inner").find(".table__function").find(".c-table-btns__wrapper").eq(i).css("height",max_height);
        // })

        let func_width = $(this).find(".table__function").width();
        $(this).css("padding-right",func_width);
    })
}