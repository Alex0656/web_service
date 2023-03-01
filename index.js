const requestURL = 'http://localhost:8080/core/get/892232'
const xhr = new XMLHttpRequest()
xhr.open("GET", requestURL)
xhr.onload = () => {
  const json = xhr.response;
  const obj = JSON.parse(xhr.response);
  $('#my_code').text(obj.code);
  $('#my_owner').text(obj.owner);
  $('#my_balance').text(obj.balance);
};
xhr.send()


document.getElementById("my_money_02").addEventListener("click", () => {
  fetch('http://localhost:8080/core/deleteAccount/892232', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({code: 892232})
  })
  window.location.reload();
});

/*
document.getElementById("my_money").addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://localhost:8080/core/openAcc', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  let code = document.getElementById('#inputCode');
  let owner = document.getElementById('#inputFullName');
  let balance = document.getElementById('#inputBalance');

  let newInfo = {
    code: code,
    owner: owner,
    balance: balance
  }

  xhr.send(JSON.stringify(newInfo));
  window.location.reload();
});
*/
/*
SendRequest('POST',requestURL, body)
.then(data => console.log(data))
.catch(err => console.log(err))

let pms = new Promise(function (resolve){
  resolve(baseFs.sendRequest("POST", ["core", "openAcc"]));
  });
  pms.then(function (value){
  console.log(value);
  setValsToHtml(value);
  });
*/






/*
async function my_post(newInfo) {
  const response = fetch("http://localhost:8080/core/openAcc", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}, 
    body: JSON.stringify(newInfo)
  });
  return await response.json()
}
*/

document.getElementById("#my_money").addEventListener("click", () => {
  let code = document.getElementById('#inputCode').value;
  let owner = document.getElementById('#inputFullName').value;
  let balance = document.getElementById('#inputBalance').value;

  let newInfo = {
    code: code,
    owner: owner,
    balance: balance
  }
  console.log(newInfo)

  const response = fetch("http://localhost:8080/core/openAcc", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}, 
    body: JSON.stringify(newInfo)
  });
  return response.json()

  /*
  let promise = new Promise(function (resolve) {resolve(my_post(newInfo));});
  promise.then(function (response) {
    console.log(response)
  });
  */
  //window.location.reload();
});



/*
const form = document.getElementById('user-form_post');
form.addEventListener('#my_money', my_posst);

function my_posst(e) {
  e.preventDefault();

  let code = document.getElementById('#inputCode').value;
  let owner = document.getElementById('#inputFullName').value;
  let balance = document.getElementById('#inputBalance').value;

  let newInfo = {
    code: code,
    owner: owner,
    balance: balance
  }

  fetch('http://localhost:8080/core/openAcc', {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
      .then(res => res.json())
      .catch(err => console.log(err))
}
*/