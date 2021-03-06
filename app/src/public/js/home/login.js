"use strict";

const id = document.querySelector("#id"),
  pwd = document.querySelector("#pwd"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id : id.value,
    pwd : pwd.value
  };
  
  fetch("/login", {
    method : "POST",
    headers : {
      "Content-Type" : "application/JSON"
    },
    body : JSON.stringify(req)
  })
    .then((res) => res.json())
    // .then((res) => console.log(res));  아래 코드처럼 생략 가능
    // .then(console.log);
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    })

}