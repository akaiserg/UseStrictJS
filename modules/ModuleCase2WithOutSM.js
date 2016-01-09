Main.ModuleCase2WithOutSM= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("No duplicates");

    };

    this.showCodeWithOutSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase2WithOutSM_id").removeClass("hide");
    };



    this.executeCodeWithOutStrict=function(param1,param2,param1){

        console.info("the values are: ",param1,param2,param1);

    };




}