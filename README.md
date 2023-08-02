## SignUp

```
fetch('http://localhost:3000/users/signup',
{
method:'POST',
body:JSON.stringify({username:'admin',password:'password',email:'email@m.y',role:role_id}),
headers:{'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',}
}
)
.then(res=>res.json()).
then(json=>console.log(json))
```

<details><summary>Output</summary>
<pre>
{message: username has created}
</pre>
</details>
## Created Admin User

```
fetch('http://localhost:3000/users/admin',{
    method:'POST',
    body:JSON.stringify(
        {
            username:'username',
            password:'password',
            email:'email@email.email',
            role:'role_id',
            isAdmin:true
        }
    ),
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
}).then(result=>result.json()).then(json=>console.log(json))
```

<details><summary>Output</summary>
<pre>
    {
        message: 'username has added to administration group'
    }
</pre>
</details>
