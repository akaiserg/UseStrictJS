
Main.ModuleCase2WithSMHelper= function(){

    this.setTitle=function(tittleId){

        $("#"+tittleId).html("No duplicates");

    };

    this.showCodeWithSM=function(){

        $('[id^="codeCase"]').addClass("hide");
        $("#codeCase2WithSM_id").removeClass("hide");
    };


};