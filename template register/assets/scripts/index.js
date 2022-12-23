



function register(){

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(JSON.stringify({
    name:name,
    email:email,
    password:password
  }));



 const options = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      name:name,
      email:email,
      password:password
    })
   };
   fetch('http://localhost:3000/user/register', options)

   .then(async (resp) => {
    var status = await resp.text();
    console.log(status)
    if(status == 'Conta criada' ){
        location.href = "/user/Login"

    }if (status == "Email já existe") {
        alert('Email já existe')

    }if (status == "Credenciais não correspondem com o exigido") {
        alert('Credenciais não correspondem com o exigido')
    }

    })
}

