function InsertionSort(){
	totaldelay=0;
	onoff_buttons();
	var i,j;
	for(i=1;i<n;i++){
		var heightval=barvaluelist[i];
		for(j=i-1;j>=0;j--){
			update_div(barBackgroundlist[j],barvaluelist[j],"yellow");
			if(heightval<barvaluelist[j]){
			barvaluelist[j+1]=barvaluelist[j];
			update_div(barBackgroundlist[j],barvaluelist[j],"blue");
			update_div(barBackgroundlist[j+1],barvaluelist[j+1],"blue");
			}
			else
			{update_div(barBackgroundlist[j],barvaluelist[j],"blue");
			break;}	
		}
		barvaluelist[j+1]=heightval;
		update_div(barBackgroundlist[j+1],barvaluelist[j+1],"green");
		update_div(barBackgroundlist[j+1],barvaluelist[j+1],"blue");
	}
	done();
	onoff_buttons();
}