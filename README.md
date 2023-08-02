## SignUp

```
fetch('http://localhost:3000/users/signup',
{
method:'POST',
body:JSON.stringify({username:'admin',password:'password'}),
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
