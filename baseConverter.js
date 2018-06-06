function baseConverter(decNumber, base) {
	var remStack = new Stack(),
	    rem,
	    baseString = '',
	    digits = '0123456789ABCDEF';
	while(decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while(!remStack.isEmpty()){
		baseString += digits[remStack.pop()];
	}
	return baseString;	
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

console.log(baseConverter(109,8));
console.log(baseConverter(109,16));
