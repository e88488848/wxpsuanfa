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

var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('Camila');
queue.enqueue('xp');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.print();
