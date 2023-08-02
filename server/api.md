##Newspaper REST API

##API Reference

####Get Roles Has Permissions method GET

```http
GET localhost:3000/role
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

####Get group user with roles

```http
GET localhost:3000/role/users
```

<details>
    <summary>Output</summary>
    <pre>
    [
        {
            "id": 3,
            "createdAt": "2023-08-02T11:50:29.000Z",
            "updatedAt": "2023-08-02T11:50:29.000Z",
            "user": {
                "id": 10,
                "username": "admin",
                "password": "Admin@12345",
                "refresh_token": null,
                "first_name": null,
                "last_name": null,
                "email": "polat@mail.ya",
                "info": null,
                "imageId": null,
                "createdAt": "2023-08-02T11:50:29.000Z",
                "updatedAt": "2023-08-02T11:50:29.000Z"
            },
            "usersRole": {
                "id": 1,
                "createdAt": "2023-08-02T11:05:32.000Z",
                "updatedAt": "2023-08-02T11:05:32.000Z",
                "role": {
                    "id": 1,
                    "name": "creator"
                },
                "permission": {
                    "id": 1,
                    "create": false,
                    "read": true,
                    "update": false,
                    "delete": false,
                    "is_admin": false
                }
            }
        }
    ]
</pre>
</details>
