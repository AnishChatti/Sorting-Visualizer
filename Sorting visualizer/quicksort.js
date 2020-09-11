function QuickSort(){
	onoff_buttons();
	QuickSortH(0,n-1);
	done();
	onoff_buttons();
}
function QuickSortH(low,high) {
	if(high>=low){
var pivot=partition(low,high);
QuickSortH(low,pivot-1);
QuickSortH(pivot+1,high);
}
}
function partition(low,high){
	var pivot=high,i=low,j=low;
	update_div(barBackgroundlist[pivot],barvaluelist[pivot],"red");
	while(j<high){
		if(barvaluelist[j]<=barvaluelist[pivot]){
			update_div(barBackgroundlist[i],barvaluelist[i],"yellow");
			update_div(barBackgroundlist[j],barvaluelist[j],"yellow");
			var h=barvaluelist[i];
			barvaluelist[i]=barvaluelist[j];
			barvaluelist[j]=h;
			update_div(barBackgroundlist[i],barvaluelist[i],"blue");
			update_div(barBackgroundlist[j],barvaluelist[j],"blue");
			i++;
		}
		j++;
	}
	var h=barvaluelist[i];
	barvaluelist[i]=barvaluelist[pivot];
	barvaluelist[pivot]=h;
	update_div(barBackgroundlist[pivot],barvaluelist[pivot],"blue");
	update_div(barBackgroundlist[i],barvaluelist[i],"green");
	return i;
}