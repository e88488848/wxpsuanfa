function PriorityQueue() {
	var items = [];

	function QueueElement(element,priority){
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element,priority);
		if(this.isEmpty()){
			items.push(queueElement);	
		}else {
			var added = false;
			for(var i = 0;i<items.length;i++){
				console.log(items[i].priority);
				if(queueElement.priority<items[i].priority){
					items.splice(i,0,queueElement);
					added = true;
					break;
				}
			}
		if(!added){
			items.push(queueElement);
		}
		}
			
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

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('john',2);
priorityQueue.enqueue('jack',1);
priorityQueue.enqueue('camila',1);
priorityQueue.print();




