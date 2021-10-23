window.addEventListener('message', (event) => {
    if (event.data.type === 'openui') {
        openUi();
    }
});

function openUi(){
    let password = Math.floor((Math.random() * 899999) + 100000)
    $('.container').css('display', 'block');
    $('.first').css('display', 'block');
    setTimeout(function(){
        $('.first').css('display', 'none');
        $('.password').css('display', 'block');
        $('.password').html(password);
        setTimeout(function(){
            $('.password').css('display', 'none');
            $('.input').css('display', 'block');
            focusMethod();
            setTimeout(function(){
                $('.input').css('display', 'none');
                $('.finish').css('display', 'block');
                if(password == $("#password-input").val()){
                    $('#finish-text').html('Hack İşlemi Başarılı!');
                } else {
                    $('#finish-text').html('Hack İşlemi Başarısız!');
                }
                setTimeout(function(){
                    if(password == $("#password-input").val()){
                        $.post('http://ygt_password/close', JSON.stringify({
                            result: true
                        }));
                        $('#finish-text').html('Hack İşlemi Başarılı!');
                    } else {
                        $.post('http://ygt_password/close', JSON.stringify({
                            result: false
                        }));
                        $('#finish-text').html('Hack İşlemi Başarısız!');
                    }
                    $("#password-input").val("");
                    $('.finish').css('display', 'none');
                    $('.container').css('display', 'none');
                }, 2000);
            }, 5000);
        }, 4000);
    }, 3000);
}

focusMethod = function getFocus(){
    document.getElementById("password-input").focus();
}