getAccountData();
async function getAccountData(){
    var response = await fetch("https://localhost:7285/api/Accoun");
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