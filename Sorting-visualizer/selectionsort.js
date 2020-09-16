function SelectionSort(){
	totaldelay=0;
	onoff_buttons();
	for (var i=0;i<n-1;i++){
		var minheightidx=i;
		for(var j=i;j<n;j++){
			update_div(barBackgroundlist[j],barvaluelist[j],"yellow");
			if(barvaluelist[minheightidx]>barvaluelist[j]){
				update_div(barBackgroundlist[minheightidx],barvaluelist[minheightidx],"blue");
				minheightidx=j;
				update_div(barBackgroundlist[minheightidx],barvaluelist[minheightidx],"red");
			}
			else
			update_div(barBackgroundlist[j],barvaluelist[j],"blue");
			
		}
		if(i!=minheightidx){
		var h=barvaluelist[i];
		barvaluelist[i]=barvaluelist[minheightidx];
		barvaluelist[minheightidx]=h;	
		update_div(barBackgroundlist[minheightidx],barvaluelist[minheightidx],"blue");
	}
			update_div(barBackgroundlist[i],barvaluelist[i],"green");
	}
	done();
	onoff_buttons();
}