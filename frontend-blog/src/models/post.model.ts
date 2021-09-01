export interface post {
    "title": String,
    "text": String,
    "author": String,
    "date": String,
}

export interface postBody{
    "title": String,
    "text": String,
    "author": String,
    "array"?: Array<post>
}