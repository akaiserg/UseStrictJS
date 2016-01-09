Main.ModuleCase1= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("Using a variable without declaring it");

    };



    this.showCodeWithSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase1WithSM_id").removeClass("hide");
    };


    this.showCodeWithOutSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase1WithOutSM_id").removeClass("hide");
    };

    this.executeCodeWithStrict=function(){

        "use strict";
        // This causes a syntax error.
        testVar = 5;
        console.info(testvar);

    };


    this.executeCodeWithOutStrict=function(){

        // it's  global
        testVar = 5;
        console.info("Value of testVar is "+testVar);

    };




}