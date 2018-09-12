// login/pass/text list
var login_pass = {
	'Hibiki314' :
		['a818a71bc0bf89fb40dd3729ebf67373',
			'19A7BCC36F5A3792611D4C014C8B563FF21066D66911250D'],
	'' :
		[''],
	'' :
		['',
			'']
};
// login ?
function des (id, pass) {
}
// login ?
function login (id, pass) {
	if (!id || !pass || !login_pass[id]) return false;
	return (login_pass[id][0] == MD5_hexhash(pass)) ? true : false;
}
// to login from form-element
function login_from_form (form) {
	// form ?
	if (!form || form.nodeName != 'FORM' || !form.elements['login']) {
		form = null;
		var formz = document.getElementsByTagName('FORM');
		for (var i = 0; i < formz.length; i++) {
			if (formz[i].elements['login']) { form = formz[i]; break; }
		}
		if (!form) return false;
	}
	// login OK ?
	var id = form.elements['login'].value;
	var pass = form.elements['pass'].value;
	var login_ok = login(id, pass);

	//---- your process ----
	// login failed ?
	if (!login_ok) {
alert('IDが存在しないかパスワードが間違っています');
//location.href = 'login-error.html';
		//alert('Login failed.');
		return false;
	}
	// decrypt
	var des_enc = login_pass[id][1];
	var text = unescape(  des_cbc_decrypt(pass, des_unescape(des_enc) ) );
	location.href = text;
	//alert(text);
}
