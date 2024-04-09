const newman = require("newman")

newman.run({
    collection: "json-collection/hugo.postman_collection.json",
    environment: "json-env/hugo.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
