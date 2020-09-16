var n=60,totaldelay=0,delay=10000/50;
var bars=[];
var buttons=document.getElementsByTagName("button");
var container=document.getElementById("container");
var buttonscontainer=document.getElementById("buttons");
barBackgroundlist=[];
barvaluelist=[];
setheights();
addevents();
function onoff_buttons(){
	window.setTimeout(function(){
	var displaystatus=buttonscontainer.style.display;
	if(displaystatus=="none")
		buttonscontainer.style.display="block";
	else
		buttonscontainer.style.display="none";
	},totaldelay+=delay);
	
}
function setheights(){
	for(var i=0;i<n;i++){
		num=Math.floor(Math.random()*550);
		barvaluelist[i]=num;
		bars[i]=document.createElement("div");
		bars[i].style.height=num+"px";
		bars[i].classList.add("bars");
		barBackgroundlist[i]=bars[i].style;
		container.appendChild(bars[i]);
	}
}
function addevents(){
	for (var i=0;i<buttons.length;i++){
		buttons[i].addEventListener("click",function(){
			if(this.textContent=="Bubble Sort")
				BubbleSort();
			else if(this.textContent=="Selection Sort")
				SelectionSort();
			else if(this.textContent=="Insertion Sort")
				InsertionSort();
			else if(this.textContent=="Merge Sort")
				MergeSort();
			else if(this.textContent=="Quick Sort")
				QuickSort();

			
		})
	}
}
function update_div(mybar,height,color){
	window.setTimeout(function(){
		mybar.backgroundColor=color;
		mybar.height=height+"px";
	},totaldelay+=delay);
}

function done()
{	
	
	for(var i=0;i<n;i++){
		update_div(barBackgroundlist[i],barvaluelist[i],"purple");
	}

}
