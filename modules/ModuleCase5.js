Main.ModuleCase5= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("Eliminates 'this' coercion");

    };



    this.showCodeWithSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase5WithSM_id").removeClass("hide");
    };


    this.showCodeWithOutSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase5WithOutSM_id").removeClass("hide");
    };

    this.executeCodeWithStrict=function(){

        "use strict";
        //window.color = "red";
        function sayColor() {
            window.color = "red";
            console.info(this.color);
        }
        // Throws an error in strict mode, "red" otherwise
        console.info(sayColor());

    };


    this.executeCodeWithOutStrict=function(){

        function sayColor() {
            window.color = "red";
            console.info(this.color);
        }
        console.info(sayColor());

    };




}