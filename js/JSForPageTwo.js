window.addEventListener('load', function () {

	// 创建图片数组存放图片
	let imgArr = ["../img/轮播素材%20(1).jpg", "../img/轮播素材%20(2).jpg", "../img/轮播素材%20(7).jpg",
		"../img/轮播素材%20(11).jpg", "../img/轮播素材%20(9).jpg", "../img/轮播素材%20(3).jpg",
		"../img/轮播素材%20(10).jpg", "../img/轮播素材%20(4).jpg", "../img/轮播素材%20(5).jpg",
		"../img/轮播素材%20(13).jpg","../img/轮播素材%20(6).jpg","../img/轮播素材%20(8).jpg",
		"../img/轮播素材%20(12).jpg"]

	let index = 0 // 当前播放图片的数组下标
	let img = document.querySelector('img');
	let imgBox = document.querySelector('.imageBox');
	let right = document.querySelector('#toRight');
	let left = document.querySelector('#toLeft');

	// 图片改变函数
	function changeImg(d) {
		if (d < 0) {
			if (index === 0) {
				index = imgArr.length - 1;
				img.src = imgArr[index];
			} else {
				index -= 1;
				img.src = imgArr[index];
			}
		} else {
			index += 1;
			index %= imgArr.length;
			img.src = imgArr[index];
		}
	}
	//  自动轮播图播放
	let interTimer = setInterval(() => {
		changeImg();
	}, 2000);
	//   轮播图停止
	imgBox.addEventListener('mouseenter', function () {
		clearInterval(interTimer);
		// 向左切换图片
		left.addEventListener('click', function () {
			let d = -1;
			changeImg(d);
		})
		// 向右切换图片
		right.addEventListener('click', function () {
			changeImg();
		})
	})
	//轮播图开启
	imgBox.addEventListener('mouseleave', function () {
		interTimer = null;
		interTimer = setInterval(() => {
			changeImg();
		}, 2000);
	})
})
