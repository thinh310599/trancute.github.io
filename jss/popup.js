
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ơ';
a[3]='n';
a[4]=' ';
a[5]='g';
a[6]='i';
a[7]='ả';
a[8]='n';
a[9]='!';
a[10]=' ';
a[11]='V';
a[12]='ì';
a[13]=' ';
a[14]='C';
a[15]='h';
a[16]='ị';
a[17]=' ';
a[18]='T';
a[19]='h';
a[20]='í';
a[21]='c';
a[22]='h';
a[23]=' ';
a[24]='E';
a[25]='m';
a[26]=' ';
a[27]='♥';
a[28]=' ';
a[29]='Đ';
a[30]='ư';
a[31]='ợ';
a[32]='c';
a[33]=' ';
a[34]='k';
a[35]='h';
a[36]='ô';
a[37]='n';
a[38]='g';
a[39]='?';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Em biết là chị sẽ trả lời như vậy 🥰🥰");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ THÌ EM CŨNG THÍCH CHỊ MÀ");
							$("#divResult2").fadeIn(2000,function()
								{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>VẬY HÃY ĐỂ TRÁI TIM EM THUỘC VỀ CHỊ NHÉ!. Chúc chị Valentine vui vẻ ạ 😘");
									$("#divResult3").fadeIn(2000);
								}
								);
							}
						);
					}
				