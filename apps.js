let db = [];

function addBook(title, author, ISBN, genre){
    let book = {
        title: title,
        author: author,
        ISBN: ISBN,
        status: true,
        genre: genre
    }

    db.push(book)
}

function removeBook() {
    db.pop()
}

function borrowBook(ISBNUMBER) {
    for (let i = 0; i < db.length; i++) {
        if(db[i].ISBN == ISBNUMBER) {
            db[i].status = false
        }
    }
}


function returnBook(ISBNUMBER) {
    for (let i = 0; i < db.length; i++) {
        let book = db[i]
        if(book.ISBN == ISBNUMBER && book.status == false) {
            db[i].status = true
        }
    }
}

function checkAvailable(title){
    for (i = 0; i < db.length; i++){

    if (db[i].title === 'tamankwe and the highway robbers'){
        console.log("The book is available");
        
    }
    }
}


console.log(db)
addBook("samankwe and the highway robbers", "chinua achebe", "2345-1244", "school literature")

borrowBook("2345-1244")
returnBook("2345-1244")
checkAvailable('samankwe and the highway robbers')
console.log(db)