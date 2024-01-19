//your JS code here. If required.
function mapLetters(s){
	let obj={};
	for(let i=0;i<s.length;i++){
		if(!obj.hasOwnProperty(s[i])) obj.s[i]=[];
		obj.s[i].push(i);
	}
	return obj;
}