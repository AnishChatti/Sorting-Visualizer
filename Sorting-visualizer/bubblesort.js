function BubbleSort(){
	totaldelay=0;
	onoff_buttons();
	for(var i=0;i<n;i++){
		for(var j=0;j<n-i-1;j++){
			update_div(barBackgroundlist[j],barvaluelist[j],"yellow");
			update_div(barBackgroundlist[j+1],barvaluelist[j+1],"yellow");
			if(barvaluelist[j]>barvaluelist[j+1])
				{
				update_div(barBackgroundlist[j],barvaluelist[j],"red");
				update_div(barBackgroundlist[j+1],barvaluelist[j+1],"red");
				var val=barvaluelist[j];
				barvaluelist[j]=barvaluelist[j+1];
				barvaluelist[j+1]=val;

				}

			update_div(barBackgroundlist[j],barvaluelist[j],"green");
			update_div(barBackgroundlist[j+1],barvaluelist[j+1],"green");
			update_div(barBackgroundlist[j],barvaluelist[j],"blue");
			update_div(barBackgroundlist[j+1],barvaluelist[j+1],"blue");
		}
		
		update_div(barBackgroundlist[n-i-1],barvaluelist[n-i-1],"green");
	}
	done();
	onoff_buttons();
}
