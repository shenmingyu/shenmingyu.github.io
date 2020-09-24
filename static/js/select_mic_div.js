for (i = 0; i < 7; i++) {
	let musicList = $(".musicList").children("i.micList");
	const musicClassName = musicList.className.split(/\s+/)[1];
	console.log(musicClassName);

}



// musicList.addEventListener("click", () => {
// 	console.log('1');
// 	const musicClassName = musicList.className.split(/\s+/)[1];
// 	console.log(musicClassName);
// })