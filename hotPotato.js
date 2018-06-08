function hotPotato(nameList,num){
	var queue = new Queue();
	for(var i = 0; i < nameList.length;i++){
		queue.enqueue(nameList[i]);
	}
	
	var eliminated = '';
	while(queue.size() > 1) {
		for(var i = 0; i < num;i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated+'����̭');
	}
	return queue.dequeue();
}

var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names,7);
console.log('ʤ����'+winner);



function Queue(){
	var items = [];
	//������������Ԫ��
	this.enqueue = function(element){
		items.push(element)
	}
	//�Ƴ����еĵ�һ
	this.dequeue = function(){
		return items.shift();
	}
	//������ǰ���Ԫ��
	this.front = function(){
		return items[0];
	}
	//�ж϶����Ƿ�Ϊ��
	this.isEmpty = function(){
		return items.length == 0;
	}
	//���ض��еĴ�С
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		console.log(items.toString());
	}
	this.clear = function(){
		items = [];	
	}	
}