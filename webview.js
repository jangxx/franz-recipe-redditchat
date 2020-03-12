module.exports = (Franz) => {
	const getMessages = function getMessages() {
		let matches = document.title.match(/\((\d+)\).*/);
		let count = 0;

		if (matches != null) {
			count = Number(matches[1]);
		}

		Franz.setBadge(count);
	};

	Franz.loop(getMessages);
};