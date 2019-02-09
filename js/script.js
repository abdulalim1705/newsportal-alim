//for fullname
function checkName(){
		var fNameLength = $('#fName').val().length;
	if(fNameLength>=8 && fNameLength<=16){
		$('#fNameError').text('');

		
	}else{
		$('#fNameError').text('Frist name should be 8 to 16 charecter.');
		error_name = true;
	}
	
}

$('#fName').click(function(){
	checkName()
});

$('#fName').blur(function(){
	checkName()
});

$('#fName').keyup(function(){
	checkName()
});





//for email address
function checkEmail(){
	var emailPtrn = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i);
	if(emailPtrn.test($('#email').val())){
		$('#emailError').text(' ');
		
	}else{
		$('#emailError').text('Invalied Email Address');
		error_email = true;
	}
}


$('#email').blur(function(){
	checkEmail()
});

$('#email').keyup(function(){
	checkEmail()
});





//for pasword


function passwordCheck(){
	var passPtrn = new RegExp(/^[a-zA-Z0-9]{6,10}$/i);
	if(passPtrn.test($('#psd').val())){
		$('#psdError').text(' ');
	
	}else{
		$('#psdError').text('Password should be 6 to 10 charecter between letter and digit.');
			error_psd = true;
		
	}
}

$('#psd').blur(function(){
	passwordCheck();
});

$('#psd').keyup(function(){
	passwordCheck();
});




//  for conferm passwordCheck



function confermCheck(){
	var PassCheck = $('#psd').val();
	var confirmPassCheck = $('#conPsd').val();
	if(confirmPassCheck==PassCheck){
			$('#conPsdError').text(' ');
		
	}else{
		$('#conPsdError').text('Password not match.');
		error_conpsd = true;
	}
}

$('#conPsd').blur(function(){
	confermCheck();
});

$('#conPsd').keyup(function(){
	confermCheck();
});



//for distric name

function districCheck(){
	var districName = $('#distric').val();
	if(districName==''){
		$('#districError').text('Select one');
		error_distric = true;
	}else{
		$('#districError').text('');
		
	}
}
$('#distric').click(function(){
	districCheck();
})




$('#registration_form').submit(function(){
	error_name = false;
	error_email = false;
	error_psd = false;
	error_conpsd = false;
	error_distric = false;

	checkName();
	checkEmail();
	confermCheck();
	passwordCheck();
	districCheck();



	if(error_name==false && error_email==false && error_psd==false && error_conpsd==false && error_distric==false){
		return true;
	}else{
		return false;
	}

})