const showFormattedDate = (date) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(date).toLocaleDateString("id-ID", options);
};

const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
	try {
		const response = await fetch(url, optionsObj);
		if (!response.ok) throw Error("please reload the app");
	} catch (err) {
		errMsg = err.message;
	} finally {
		return errMsg;
	}
};

export { showFormattedDate, apiRequest };
