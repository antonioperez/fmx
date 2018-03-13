


export function goToScreen(navigator, target) {

    navigator.resetTo({
        screen: target,
        navigatorStyle: {
          navBarHidden: true
        },
    });
    // navigator.popToRoot({
    //     animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
    //     animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
    // });
}

export function toggleSideBar(navigator, action){
    var act = "";
    if (action) act = action; 
    navigator.toggleDrawer({
        side: 'left',
        animated: true, 
        to: act
    });
}

export function showScreenModal(navigator, target){
    navigator.showModal({
        screen: target,
        navigatorStyle: {
          navBarHidden: false,
          navBarBackgroundColor: "#000"
        },
    });
}

export function dismissModal(navigator){
    navigator.dismissModal({
        animationType: 'slide-down'
    });
}