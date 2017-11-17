/**
 * Method place a asunchronus HTTP request to the server for theUrl, and calls back the clallback once success.
 * @param theUrl - The url to which the reques is to be placed.
 * @param callback - The method to be called back once the request is completed successfully.
 * @param method - The method [GET/POST] used to send data to the server.
 */
function httpGetAsync(theUrl, callback, method)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open(method, theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

/**
 * Gets the command details from the server and populates the command drop down.
 */
function configurePage(){
	loadPageForMenu("About");
}


function createAndAddElement(parent, label, val){
	var para = document.createElement("p");
	var spanLabel = document.createElement("span");
	var spanVal = document.createElement("span");
	var label = document.createTextNode(label);
	var val = document.createTextNode(val);
	spanLabel.appendChild(label);
	spanVal.appendChild(val);
	spanLabel.setAttribute("class", "cmdLabel");
	spanVal.setAttribute("class","cmdValue");
	para.appendChild(spanLabel);
	para.appendChild(spanVal);
	parent.appendChild(para);
}

function loadPageForMenu(menuName){
	var pageName = "./res/html/"+menuName+".html";
	var imageName = "./res/img/"+menuName+".jpg";
	document.getElementById("iContent").src = pageName;
	document.body.style.backgroundImage = "url("+imageName+")";
}