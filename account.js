getAccountData();
async function getAccountData(){
    var response = await fetch("https://61.222.180.215/api/Account");
    var source = await response.json();
    console.log(source);
    if(source.status == 0){
        var data = source.data;
        var table = $(`#account tbody`);
        $.each(data,function(index,value){
            table.append(`<tr>
                <td>${value.userid}</td>
                <td>${value.bankname}</td>
                <td>${value.bankcode}</td>
                <td>${value.bankaccount}</td>
                <td>${value.amount}</td>
            </tr>`)
        })
    }
}