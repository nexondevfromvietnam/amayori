var host = "ndqm.site";
    if ((host == window.location.host) && (window.location.protocol != "https:")){
        window.location.protocol = "https";
    }

//remove hash at the end of the url when user reload
if(window.location.hash){
    location.href = './index.html'
};