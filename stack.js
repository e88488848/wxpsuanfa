function Stack(){
	var items = [];
	//��ջ�����Ԫ��
	this.push = function(element){
		items.push(element);
	}
	//�Ƴ�ջ��Ԫ�� ͬʱ���ر��Ƴ���Ԫ��
	this.pop = function(element) {
		return items.pop(element);
	}
	//����ջ��Ԫ��
	this.peek = function(){
		return items[items.length-1];
	}
	//�ж������Ƿ�Ϊ��
	this.isEmpty = function(){
		return items.length == 0;
	}
	this.size = function(){
		return items.length;
	}
	//���ջ�е�����Ԫ��
	function clear(){
		items = [];
	}
	//���ջ����������
	this.print = function(){
		console.log(items.toString());
	}
}

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.pop();
stack.pop();





