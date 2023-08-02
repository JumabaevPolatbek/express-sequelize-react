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
 Created Admin User

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

Get Roles Has Permissions method GET

```
fetch('http://localhost:3000')
.then(result=>result.json())
.then(json=>console.log(json))
```

<details>
    <summary>Output</summary>
    <pre>
        [
    {
        "id": 1,
        "name": "creator",
        "permissions": [
            {
                "id": 1,
                "create": false,
                "read": true,
                "update": false,
                "delete": false,
                "is_admin": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Editor",
        "permissions": [
            {
                "id": 3,
                "create": true,
                "read": true,
                "update": true,
                "delete": true,
                "is_admin": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Редактор",
        "permissions": [
            {
                "id": 2,
                "create": true,
                "read": true,
                "update": true,
                "delete": true,
                "is_admin": false
            }
        ]
    }
]
    </pre>
</details>
