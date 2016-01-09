Main.ModuleCase6= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("Errors for immutables");

    };



    this.showCodeWithSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase6WithSM_id").removeClass("hide");
    };


    this.showCodeWithOutSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase6WithOutSM_id").removeClass("hide");
    };

    this.executeCodeWithStrict=function(){

        "use strict";
        var person = {};
        Object.defineProperty(person, "name", {
            writable: false,
            value: "Andres"
        });
        // throws an error in strict mode
        person.name = "John";
        console.info(person.name);

    };


    this.executeCodeWithOutStrict=function(){

        var person = {};
        Object.defineProperty(person, "name", {
            writable: false,
            value: "Andres"
        });
        // doesn't tthrow an error
        person.name = "John";
        console.info(person.name);

    };




}