let base_URL="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ofLBZaoCclsfYaTCUx4r51XSDal0m12mFRel2LCz";

let selects=document.querySelectorAll("select");
let exchange_result=document.querySelector(".exchange_result");

for(select of selects){

    for(country_code in countryList){
        let option=document.createElement("option");
        option.innerText=country_code;
        option.value=country_code;

        if(select.name == "from" && country_code == "USD"){
            option.selected=true;
        }

        if(select.name == "to" && country_code == "INR"){
            option.selected=true;
        }
        select.append(option);
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    })
}

let updateFlag = (event) => {
    let currency_code=event.value;
    let country_code=countryList[currency_code];
    console.log(country_code);
    img=event.parentElement.querySelector("img");
    new_img_url=`https://flagsapi.com/${country_code}/flat/64.png`;
    img.src= new_img_url;
}

document.querySelector("button").addEventListener("click", async(evt) =>{
    evt.preventDefault();
    let from_currency_code=document.querySelector(".from").value;

    let to_currency_code=document.querySelector(".to").value;

    console.log(from_currency_code);
    console.log(to_currency_code);
    new_URL=`${base_URL}&base_currency=${from_currency_code}&currencies=${to_currency_code}`;
    console.log(new_URL)
    let response=await fetch(new_URL);
    let data=await response.json();
    if (!data.data) {
        exchange_result.innerText = "Currency not supported in free plan";
        return;
    }
    let exchg_rate=data.data[to_currency_code];
    let amount=document.querySelector("input").value;
    exchange_result.innerText=`${amount} ${from_currency_code} = ${amount * exchg_rate} ${to_currency_code}`;
});