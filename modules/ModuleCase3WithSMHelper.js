
Main.ModuleCase3WithSMHelper= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("Future reserved keywords");

    };

    this.showCodeWithSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase3WithSM_id").removeClass("hide");
    };


};