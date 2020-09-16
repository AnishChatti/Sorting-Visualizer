function MergeSort(){
	totaldelay=0;
	onoff_buttons();
	MergeSortH(0,n-1);
	done();
	onoff_buttons();
}
function MergeSortH(low,high){
		if(high>low){
	var mid=Math.floor((low+high)/2);
	MergeSortH(low,mid);
	MergeSortH(mid+1,high);
	Merge(low,mid,high);
}
}
function Merge(low,mid,high){
	var i=low,j=mid+1,k=0;
	var n=mid+1,m=high+1;
	var merged=[];
	while(i<n && j<m){
		if(barvaluelist[i]<barvaluelist[j])
			merged[k++]=barvaluelist[i++];
		else
			merged[k++]=barvaluelist[j++];
	}
	while(i<n)
		merged[k++]=barvaluelist[i++];
	while(j<m)
		merged[k++]=barvaluelist[j++];
	for(i=0;i<=high-low;i++){
		barvaluelist[low+i]=merged[i];
		update_div(barBackgroundlist[low+i],barvaluelist[low+i],"yellow");
	}
}
