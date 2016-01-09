Main.ModuleCase3WithOutSM= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("Future reserved keywords");

    };

    this.showCodeWithOutSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase3WithOutSM_id").removeClass("hide");
    };



    this.executeCodeWithOutStrict=function(){

        //"use strict";
        /*implements interface package private protected public static yield eval*/
        var private=221;
        var interface="My interface";
        console.info(private,interface);

    };




}