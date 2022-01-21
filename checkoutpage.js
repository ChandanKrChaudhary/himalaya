document.querySelector("form").addEventListener("submit", formSubmit);
    var bozazArr=JSON.parse(localStorage.getItem("bozazData"))||[];          
    // displayTable(bozazArr)
    function formSubmit(event)
    {
        event.preventDefault();

        var Bozaz={
            category:form.cat.value,
            title:form.title.value,
            description:form.decs.value,
            price:form.price.value
        };
        bozazArr.push(Bozaz)
        displayTable(bozazArr)
        localStorage.setItem("bozazData",JSON.stringify(bozazArr))
    }
    function displayTable(bozazArr){
        var tbody=document.querySelector("tbody")
        tbody.textContent=""
        console.log(bozazArr)
        var index=1
        bozazArr.map(function(elem){
            
            var tr=document.createElement("tr")
            var td1=document.createElement("td")
            var td2=document.createElement("td")
            var td3=document.createElement("td")
            var td4=document.createElement("td")
            var td5=document.createElement("td")

            td1.textContent=(index)
            td2.textContent=elem.category
            td3.textContent=elem.title
            td4.textContent=elem.description
            td5.textContent=elem.price
            tr.append(td1,td2,td3,td4,td5)
            // tbody.append(tr)
            index=index+1
            document.querySelector("tbody").append(tr);
        });
    }