//ADD EVENTS IN JS


//on clicking the submit button the alert will be pop up
one1.addEventListener("click", ()=>
    {
        alert("hi");
    });


    // displays the input that we have entered in the input text field into the browser
    info.addEventListener("change", (()=>
    {
        alert(info.value);
        document.getElementById('one').innerHTML=`${info.value}`;
    }))

// this function displays theradio button submission in the forms

    formy.addEventListener("submit", ((e)=>
    {   e.preventDefault();
        var form=document.getElementById('formy');
        var info1=new FormData(form);
        var data=info1.get('fruit');
        if(data)
        {
            console.log(`${data}`);
            alert(`${data}`);
            document.getElementById('fruitdata').innerHTML=`${data}`;
        }
        else 
        {
        alert("slect the fruit name");
        }
    }))