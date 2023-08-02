#Newspaper REST API
Get Roles Has Permissions method GET

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
