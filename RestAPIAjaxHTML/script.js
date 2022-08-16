// JavaScript source code

function restCall() {
    let httpRequst = new XMLHttpRequest();
    httpRequst.open("Get", "http://localhost:8080/api/call")
    httpRequst.send();
    httpRequst.onload = function () {
        alert(httpRequst.responseText);
    }
    console.log("inside the acript file");
}
