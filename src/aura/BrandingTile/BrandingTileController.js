/**
 * Created by tarren.anderson on 12/4/17.
 */
({
    flipMe : function(component, event, helper){
        var flipTile = component.find('bTileContainer');
        $A.util.toggleClass(flipTile, 'flipped');
    },
    goToURL : function (component, event, helper) {
        event.stopPropagation();
        var urlEvent = $A.get("e.force:navigateToURL");
        var urlTarget = component.get('v.buttonurl');
        urlEvent.setParams({
            "url": urlTarget
        });
        urlEvent.fire();
    }

})