db.createCollection("customers");

db.createCollection("products");

db.createCollection("orders");

db.getCollectionNames();

db.customers.find();

db.customers.insertOne({
    _id: "asra",
    name: "Muhammad Arfani Asra",
});

db.products.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong("2000"),
    },
    {
        _id: 2,
        name: "Mie Sedap Soto",
        price: new NumberLong("2000"),
    },
]);

db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("8000"),
    items: [
        {
            product_id: 1,
            price: new NumberLong("2000"),
            quantity: new NumberInt("2"),
        },
        {
            product_id: 2,
            price: new NumberLong("2000"),
            quantity: new NumberInt("2"),
        },
    ],
});

db.customers.find({
    _id: "asra",
});

db.customers.find({
    name: "Muhammad Arfani Asra",
});

db.products.find({
    price: 2000,
});

db.orders.find({
    "items.product_id": 1,
});

db.products.insertMany([
    {
        _id: 3,
        name: "Pop Mie Rasa Bakso",
        price: new NumberLong("2500"),
        category: "food",
    },
    {
        _id: 4,
        name: "Samsung Galaxy 59",
        price: new NumberLong("10000000"),
        category: "handphone",
    },
    {
        _id: 5,
        name: "Acer Predator",
        price: new NumberLong("25000000"),
        category: "laptop",
    },
]);

db.customers.find({
    _id: {
        $eq: "asra",
    },
});

db.products.find({
    price: {
        $gt: 2000,
    },
});

db.products.find({
    category: {
        $in: ["laptop", "handphone"],
    },
    price: {
        $gt: 10000000,
    },
});

db.products.find({
    $and: [
        {
            category: {
                $in: ["laptop", "handphone"],
            },
        },
        {
            price: {
                $gt: 10000000,
            },
        },
    ],
});

db.products.find({
    category: {
        $not: {
            $in: ["laptop", "handphone"],
        }
    }
})

db.products.find({
    category: {
        $exists: true
    }
})

db.products.find({
    category: {
        $exists: false
    }
})

db.products.find({
    category: {
        $type: "string"
    }
})

db.products.find({
    price: {
        $type: ['int', 'long'],
    },
});

db.customers.insertOne({
    _id: "joko",
    name: "Joko",
})

db.customers.find({
    $expr: {
        $eq: ["$_id", "$name"],
    }
})

// select * from products where name is not null and category is not null
db.products.find({
    $jsonSchema: {
        required: ["name", "category"],
    }
})

// select * from products where name is not null and type(name) = 'string' and type(price) = 'number'
db.products.find({
    $jsonSchema: {
        required: ["name"],
        properties: {
            name: {
                type: "string"
            },
            price: {
                type: "number"
            }
        }
    }
})

// select * from products where price % 5 = 0
db.products.find({
    price: {
        $mod: [5, 0]
    }
})

// select * from products where price % 10000000 = 0
db.products.find({
    price: {
        $mod: [10000000, 0]
    }
})

// select * from products where name like "%mie%"
db.products.find({
    name: {
        $regex: /mie/,
        $options: "i"
    }
})

// select * from products where name like "Mie%"
db.products.find({
    name: {
        $regex: /^Mie/
    }
})

// select * from products where _id = name
db.customers.find({
    $where: function () {
        return this._id == this.name
    }
})

// insert products with tags
db.products.insertMany([
    {
        _id: 6,
        name: "Logitech Wireless Mouse",
        price: new NumberLong("17500000"),
        category: "laptop",
        tags: ["logitech", "mouse", "accessories"],
    },
    {
        _id: 7,
        name: "Cooler Pad Gaming",
        price: new NumberLong("2000000"),
        category: "laptop",
        tags: ["cooler", "laptop", "accessories", "fan"],
    },
    {
        _id: 8,
        name: "Samsung Curved Monitor",
        price: new NumberLong("17500000"),
        category: "computer",
        tags: ["samsung", "monitor", "computer"],
    }
])

// select * from products where (tags = "samsung" and tags = "monitor")
db.products.find({
    tags: {
        $all: ["samsung", "monitor"]
    }
})

// select * from products where tags in ("samsung", "logitech")
db.products.find({
    tags: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
})

// select * from products where count(tags) = 3
db.products.find({
    tags: {
        $size: 3
    }
})

// select _id, name, category from products
db.products.find({}, {
    name: 1,
    category: 1,
})

// select _id, name, category, price from products
db.products.find({}, {
    tags: 0
})
db.products.find({}, {
    tags: 0,
    price: 0
})

// select _id, name, tags[first] from products
db.products.find({}, {
    name: 1,
    tags: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
})

// select _id, name, tags[first, last] from products where tags is not null
db.products.find({
    tags: {
        $exists: true
    }
}, {
    name: 1,
    "tag.$": 1
})

// select _id, name, category, price, tags[0-1] from products where tags is not null
db.products.find({
    tags: {
        $exists: true
    }
}, {
    name: 1,
    tags: {
        $slice: 2
    }
})

// select count(*) from products
db.products.find({}).count()

// select * from products limit 4
db.products.find({}).limit(4)

// select * from products offset 2
db.products.find({}).skip(2)

// select * from products limit 4 offset 2
db.products.find({}).limit(4).skip(2)

// select * from products order by category asc, name desc
db.products.find({}).sort({
    category: 1,
    name: -1
})

// update one syntax
db.products.updateOne(
    {},     // filter
    {},     // update
    {}      // options
)

db.products.updateOne({
    _id: 1
}, {
    $set: {
        category: "food"
    }
})
db.products.updateOne({
    _id: 1
}, {
    $set: {
        category: "food"
    }
})

// update products set tags = ["food"] where category = "food" and tags is null
db.products.updateMany({
    $and: [
        {
            category: {
                $eq: "food"
            }
        },
        {
            tags: {
                $exists: false
            }
        }
    ]
}, {
    $set: {
        tags: ["food"]
    }
})

// insert wrong document
db.products.insertOne({
    _id: 9,
    name: "Ups Salah",
    wrong: "Salah Lagi"
})

// replace document with id 9
db.products.replaceOne({
    _id: 9
}, {
    name: "Adidas Sepatu lari Pria",
    price: new NumberLong("1100000"),
    category: "shoes",
    tags: [
        "adidas", "shoes", "running"
    ]
})

// update products set stock = 0
db.products.updateMany({}, {
    $set: {
        stock: 0
    }
})

// update products set stock = stock + 10
db.products.updateMany({}, {
    $inc: {
        stock: 10
    }
})

// alter table customers change name full_name
db.customers.updateMany({}, {
    $rename: {
        name: "full_name"
    }
})

// update customers set wrong = 'Ups'
db.customers.updateMany({}, {
    $set: {
        wrong: "ups"
    }
})

// alter table customers drop column wrong
db.customers.updateMany({}, {
    $unset: {
        wrong: ""
    }
})

// update products set lastModifiedDate = current_date()
db.products.updateMany({}, {
    $currentDate: {
        lastModifiedDate: {
            $type: "date"
        }
    }
})

// update products set ratings = [90, 80, 70]
db.products.updateMany({}, {
    $set: {
        ratings: [90, 80, 70]
    }
})

// update first element of array, query must include array fields
db.products.updateMany({
    ratings: 90
}, {
    $set: {
        "ratings.$": 100
    }
})

// update all element of array to 100
db.products.updateMany({}, {
    $set: {
        "ratings.$[]": 100
    }
})

// update products of array based on arrayFilters
db.products.updateMany({}, {
    $set: {
        "ratings.$[element]": 100
    }
}, {
    arrayFilters: [
        {
            element: {      // atribut ini dari $[element] -> baris 464
                $gte: 80
            }
        }
    ]
})

// update element of array with given index [mengganti index ke-0 dan ke-1 pada ratings]
db.products.updateMany({}, {
    $set: {
        "ratings.0": 50,
        "ratings.1": 60
    }
})

// add "popular" to array if not exists
db.products.updateOne({
    _id: 1
}, {
    $addToSet: {
        tags: "popular"
    }
})

// remove first element of array
db.products.updateOne({
    _id: 1
}, {
    $pop: {
        ratings: -1
    }
})

// remove last element of array
db.products.updateOne({
    _id: 2
}, {
    $pop: {
        ratings: 1
    }
})

// update products set rating = [90, 80, 70]
db.products.updateMany({}, {
    $set: {
        ratings: [90, 80, 70]
    }
})

// remove all element where ratings >= 80
db.products.updateMany({}, {
    $pull: {
        ratings: {
            $gte: 80
        }
    }
})

// add 100 to ratings
db.products.updateMany({}, {
    $push: {
        ratings: 100
    }
})

// remove element 100
db.products.updateMany({}, {
    $pullAll: {
        ratings: [100]
    }
})

// add 100, 200, 300 to ratings
db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300]
        }
    }
})

// add trending, popular to tags
db.products.updateMany({}, {
    $addToSet: {
        tags: {
            $each: ["trending", "popular"]
        }
    }
})

// add hot in position 1
db.products.updateMany({}, {
    $push: {
        tags: {
            $each: ["hot"],
            $position: 1
        }
    }
})

// add all element, but limit with slice from behind
db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $slice: -3
        }
    }
})

// add all element, and sort desc
db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $sort: -1
        }
    }
})
db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $slice: 10,
            $sort: -1
        }
    }
})

// Insert spammer document
db.customers.insertOne({
    _id: "spammer",
    full_name: "Spammer"
})

// Delete document by _id
db.customers.deleteOne({
    _id: "spammer"
})

// Insert many spammer documents
db.customers.insertMany([
    {
        _id: "spammer1",
        full_name: "Spammer1"
    },
    {
        _id: "spammer2",
        full_name: "Spammer2"
    },
    {
        _id: "spammer3",
        full_name: "Spammer3"
    }
])

// Delete many documents
db.customers.deleteMany({
    _id: {
        $regex: "spammer"
    }
})

db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "muhammad",
                full_name: "Muhammad"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "arfani",
                full_name: "Arfani"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["muhammad", "arfani", "asra"]
                }
            },
            update: {
                $set: {
                    full_name: "Muhammad Arfani Asra"
                }
            }
        }
    }
])

// create index at category in products collection
db.products.createIndex({
    category: 1
})

// get all indexes in products collection
db.products.getIndexes();

// delete indexes
db.products.dropIndex("category_1")

// find products by category (will use index)
db.products.find({
    category: "food"
})

// debugging with index
db.products.find({
    category: "food"
}).explain();
db.products.find({}).sort({
    category: 1
}).explain();

// debugging without index
db.products.find({
    "tag": "laptop"
}).explain()

// create index at price and tags in products collection
db.products.createIndex({
    stock: 1,
    tags: 1
})

// find products by stock and tags (will use index)
db.products.find({
    stock: 10,
    tags: "popular"
})

// debug with index
db.products.find({
    stock: 10
}).explain();
db.products.find({
    stock: 10,
    tags: "popular"
}).explain();

// debug without index
db.products.find({
    name: "samsung",
    tags: "popular"
}).explain();

// create index text
db.products.createIndex({
    name: "text",
    category: "text",
    tags: "text"
}, {
    weights: {
        name: 10,
        category: 5,
        tags: 1
    }
})

// get index
db.products.getIndexes();

// search products with text "mie"
db.products.find({
    $text: {
        $search: "mie"
    }
})

// search products with text "mie" OR "laptop"
db.products.find({
    $text: {
        $search: "mie laptop"
    }
})

// search products with text "mie sedap"
db.products.find({
    $text: {
        $search: '"mie sedap"'
    }
})

// search products with text "mie" and NOT "sedap"
db.products.find({
    $text: {
        $search: "mie -sedap"
    }
})

// $meta operator
db.products.find({
    $text: {
        $search: "mie laptop"
    }
}, {
    searchScore: {
        $meta: "textScore"
    }
})

// membuat wildcard index
db.customers.createIndex({
    "customFields.$**" : 1
})

// mengambil index
db.customers.getIndexes()

// Insert many customers
db.customers.insertMany([
    {
        _id: "budi",
        full_name: "Budi",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rully",
        full_name: "rully",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rudi",
        full_name: "Rudi",
        customFields: {
            motherName: "Tini",
            passion: "Enterpreneur"
        }
    }
])

// Debug wildcard index
db.customers.find({
    "customFields.passion": "Enterpreneur"
}).explain()

db.customers.find({
    "customFields.ipk": 3.2
}).explain()

db.customers.find({
    "customFields.hobby": "Gaming"
}).explain()

// Create session collection
db.createCollection("sessions");

// create TTL index
db.sessions.createIndex({
    createdAt: 1
}, {
    expireAfterSeconds: 10
});

// Will expire after 10 seconds, but background job run every 60 seconds
db.sessions.insertOne({
    _id: 1,
    session: "Session 1",
    createdAt: new Date()
});

// Create unique index in email
db.customers.createIndex({
    email: 1
}, {
    unique: true,
    sparse: true
});

// update customers set email = ? where _id = ?
db.customers.updateOne({
    _id: "arfani"
}, {
    $set: {
        email: "arfani@example.com"
    }
});

// error duplicate email
db.customers.updateOne({
    _id: "joko"
}, {
    $set: {
        email: "arfani@example.com"
    }
});

// Create unique index in full_name
db.customers.createIndex({
    full_name: 1
}, {
    collation: {
        locale: "en",
        strength: 2
    }
});

// not using index
db.customers.find({
    full_name: "Muhammad Arfani Asra"
});

// using index
db.customers.find({
    full_name: "MUHAMMAD ARFANI ASRA"
}).collation({
    locale: "en",
    strength: 2
});
db.customers.find({
    full_name: "Muhammad arfani Asra"
}).collation({
    locale: "en",
    strength: 2
});

// create partial index
db.products.createIndex({
    price: 1
}, {
    partialFilterExpression: {
        stock: {
            $gt: 0
        }
    }
});

// without partial index
db.products.find({
    price: 2500
})

// debug query with partial index
db.products.find({
    price: {
        $gt: 1000
    },
    stock: {
        $gt: 0
    }
}).explain();

// switch to database admin
use admin;

// create admin user
db.createUser(
    {
        user: 'mongo',
        pwd: 'mongo',
        roles: [
            'userAdminAnyDatabase',
            'readWriteAnyDatabase'
        ]
    }
);

“mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin”

use admin

// Create user with acces read only
db.createUser(
    {
        user: "contoh",
        pwd: "contoh",
        roles: [
            {
                role: "read", db: "test"
            }
        ]
    }
);

// Create user with access read write
db.createUser(
    {
        user: "contoh2",
        pwd: "contoh2",
        roles: [
            { role: "readWrite", db: "test" }
        ]
    }
)

// Get all users
db.getUsers()

// Connect
“mongodb://contoh:contoh@localhost:27017/test?authSource=admin”
“mongodb://contoh2:contoh2@localhost:27017/test?authSource=admin”

db.sample.insertOne({
    _id: 1,
    name: "arfani"
})

// Change password for user contoh
db.changeUserPassword("contoh", "rahasia")

// Drop user contoh
db.dropUser("contoh")

// Update user
db.updateUser("contoh2",
    {
        roles: [
            { role: "readWrite", db: "test" },
            { role: "readWrite", db: "belajar" }
        ]
    }
)

// create role with custom privileges
db.createRole({
    role: "session_management",
    privileges: [
        {
            resource: {
                db: "belajar",
                collection: "sessions"
            },
            actions: ["insert"]
        }
    ],
    roles: [
        {
            role: "read",
            db: "belajar"
        }
    ]
});

// show all roles with privileges
db.getRoles({ showPrivileges: true });

// create user with custom role
db.createUser({
    user: "arfani",
    pwd: "arfani",
    roles: ["session_management"]
});

“mongodb://arfani:arfani@localhost:27017/test?authSource=admin”

// login using user arfani
// find sessions (success)
db.sessions.find();

// insert session (success)
db.sessions.insertOne({
    _id: "test",
    name: "test"
});

// delete session (error)
db.sessions.deleteOne({
    _id: "test"
});

// update session (error)
db.sessions.updateOne({
    _id: "test"
}, {
    $set: {
        name: "ubah"
    }
});

// backup

// mongodump (binary)
bin / mongodump--uri = "mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin" --out = backup - dump

// mongoexport (json)
bin/mongoexport --uri="mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin" --collection=customers --out=customers.json

// restore

// mongorestore
bin/mongorestore --uri="mongodb://mongo:mongo@localhost:27017/belajar_restore?authSource=admin" --dir=backup-dump/belajar

// mongoimport
bin/mongoimport --uri="mongodb://mongo:mongo@localhost:27017/belajar_import?authSource=admin"  --collection=customers --file=customers.json