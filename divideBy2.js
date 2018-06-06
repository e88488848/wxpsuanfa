function divideBy2(decNumber) {
	var remStack = new Stack(),
	    rem,		
	    binaryString = '';
	while(decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}	
	while(!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}


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


console.log(divideBy2(233));