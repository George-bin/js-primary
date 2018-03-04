
// 运动函数
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);
}

// 透明度运动函数
function opacity(obj, num, target, endFn) {
	
		num = getStyle(obj, 'opacity')*100 < target ? num : -num;
		
		clearInterval( obj.opacity );
		
		obj.opacity = setInterval(function () {
			
			var speed = parseInt(getStyle(obj, 'opacity')*100) + num;
			
			if ( speed > target && num > 0 || speed < target && num < 0 ) {
				speed = target;
			}
			
			obj.style.opacity = speed/100;
			obj.style.filter = 'alpha(opacity='+ speed +')';
			
			if ( speed == target ) {
				clearInterval( obj.opacity );
				endFn && endFn();
			}

		}, 20);
}

// 抖函数
function shake ( obj, attr, endFn ) {
	
	if ( obj.onOff ) { return; }
	
	obj.onOff = true;
	
	var pos = parseInt( getStyle(obj, attr) );			// 有隐患的
	
	var arr = [];
	var num = 0;
	var timer = null;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn();
			obj.onOff = false;
		}
	}, 50);
}

// 获取元素属性函数
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }


//排序  针对数字
function compare(num1, num2) {

	if(num1 > num2) {

		return 1;

	}else if(num1 < num2) {

		return -1;

	}else {

		return 0;

	}
}

//排序 针对所有
function compareAll(value1, value2) {

	return parseInt(value1) - parseInt(value2);

}

//随机排序
function random(value1, value2) {

	return Math.random() - 0.5;

}

//随机数
function randomNum(x, y) {

	return Math.round(Math.random() * (y - x) + x);

}

//字符串倒序输出函数
function reverseStr(str) {

	return str.split('').reverse().join('');

}

// 数组去重复函数
function reMove(arr) {
	
	for(var i=0; i<arr.length; i++) {
 
    	for(var j=i+1; j<arr.length; j++) {

    		if(arr[i] == arr[j]) {

    			arr.splice(j, 1);

    			j--;
    		}
    	}
    }
}

//产生z个不重复的随机数
function reverseNumArr(x, y, z) {

	var arr = [];

	while(true) {

		var onOff = false;

		var random = parseInt(Math.random() * (y - x) + x);

		for(var i=0; i<arr.length; i++) {

			if(random === arr[i]) {

				onOff = true;

				break;
			}
		}
		if(!onOff) {

			arr.push(random);

		}
		if(arr.length === parseInt(z)) {

			break;
		}
	}

	return arr;
}