


export function goToScreen(navigator, target) {
    navigator.resetTo({
        screen: target,
        navigatorStyle: {
          navBarHidden: true
        },
    });
}

export function toggleSideBar(navigator, action){
    console.log("hi");
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