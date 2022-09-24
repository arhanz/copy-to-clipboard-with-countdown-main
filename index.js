
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("message").style.display="inline-block";
    document.getElementById("seconds").style.display="inline-block";
setTimeout(countdown, 1000);
document.getElementById("check").style.marginTop="20px";
  }
timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
    document.getElementById("br").style.display="inline-block";
		setTimeout(countdown, 1000);
	}else{
        document.getElementById("message").style.display="none";
    }
};