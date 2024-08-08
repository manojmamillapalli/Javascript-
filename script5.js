function otpgenerator()
{
    var OTP="";
    for(let i=1;i<=6;i++)
    {
        OTP+= Math.floor(Math.random()*10);
    }
    // alert(`your OTP IS ${OTP}`);
    document.getElementById('one').innerHTML=`your OTP IS ${OTP}`;
    document.getElementById('one').style.color="red";

}