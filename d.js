const sindex=1;
const images =document.getElementsByClassName("no");
function plusSlide(n){
	showSlide(sindex +=n);
}

function currentSlider(n){
	showSlide(sindex=n);
}

function showSlide(n){
	for(const i;i<3;i++){
	if(n>3){
		n=1;
	}
}
	if(n<1){
		n=2;
	}
	for(const i;i<3;i++){
	images[i].style.display="none";
	}
	images[n].style.display="block";
}