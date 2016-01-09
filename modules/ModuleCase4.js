Main.ModuleCase4= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("Variable declared inside an eval function");

    };



    this.showCodeWithSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase4WithSM_id").removeClass("hide");
    };


    this.showCodeWithOutSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase4WithOutSM_id").removeClass("hide");
    };

    this.executeCodeWithStrict=function(){

        "use strict";
        eval("var testvar = 10");
        testvar = 15;
        console.info(testvar);

    };


    this.executeCodeWithOutStrict=function(){

        eval("var testvar = 10");
        console.info(testvar);

    };




}