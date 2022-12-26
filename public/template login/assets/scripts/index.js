



function login(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(JSON.stringify({
    email:email,
    password:password
  }));



 const options = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      email:email,
      password:password
    })
   };
   fetch('http://localhost:3000/user/login', options)

   .then(async (resp) => {
    var status = await resp.text();
    console.log(status)
    if(status == 'Usuário logado' ){
      location.href = "/logado"
    }else {
        alert('Email ou senha invalidos!!')
    }

});
}

