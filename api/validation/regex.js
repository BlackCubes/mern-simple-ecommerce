exports.name = /^[a-zA-Z]{2}(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
exports.password = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[.#?!@$%^&*\\-_]).{8,60}$/;
exports.rating = /^[1-5]{1}$/;
