let bookList=  
[
    { 
        title:"A Brief History of Time", 
        author:"Steve Hawking", 
        genre:"Nonfiction", 
        description:'It addresses questions like "what do we really know about the universe." '
    },
    {
        title:"Harry Potter and the Sorcerer's Stone", 
        author:"J.K. Rowling",
        genre:"fantasy", 
        description:"Where magic goes"
    },
    {
        title:"Homo Deus - A Brief History of Tomorrow", 
        author:"Yuval Noah Harari", 
        genre: "Nonfiction", 
        description:"It shows us where we are going."
    },
    {
        title:"Sapiens - A Brief History of Humankind", 
        author:"Yuval Noah Harari", 
        genre: "Nonfiction", 
        description:"It shows us where we came from."
    },
    {
        title:"You Can Heal Your Life", 
        author:"Louise Hay", 
        genre: "Nonfiction",
        description: "The thougths we think and the words we speak create our experiences."
    },
    {
        title:"Gone With the Wind", 
        author: "Margaret Mitchell", 
        genre: "Drama",
        description: "It tells a romantic story during the America Civial War." 
    }
];



// handle search book button click
let appendedTable = false;
const handleSearchClick = function()
{
    
    
    //alert("in search");
    let searchInput = document.getElementById(`searchBkInput`);
    let tableHeadContent = [`Book Title`, `Author Name`, `Genere`, `Description`];

    //alert(searchInput.value);
    let pattern = new RegExp(searchInput.value, `gi`);
    //alert(pattern);
    let searchTable = document.createElement(`table`);
    searchTable.id = `searchResultTable`;

    let trhead = document.createElement(`tr`);

    let display=document.querySelector(`.searchResult`);

    if (appendedTable)
    {
        clearSearchBk();
    }
    
    //add header
    tableHeadContent.forEach(element => {
        let th = document.createElement(`th`);
        th.appendChild(document.createTextNode(element));
        trhead.appendChild(th);
    });
    searchTable.appendChild(trhead)

    //perform search
    bookList.forEach(bookObj => {
        let tr = document.createElement(`tr`);        
        let bookObjMatch = false;
        Object.values(bookObj).forEach(bookAttr => {
            if (bookAttr.match(pattern))
            {
               bookObjMatch = true;
            }
        });
        //add td if found
        if (bookObjMatch)
        {
            Object.values(bookObj).forEach(element=>{
                let td=document.createElement(`td`);
                td.appendChild(document.createTextNode(element));
                tr.appendChild(td);
            });
            searchTable.appendChild(tr)
        }
        
    });
    //add result to display
    if (!appendedTable)
    {
        display.appendChild(searchTable);
        appendedTable=true;
    }    
}

// clear search result table
const clearSearchBk = function()
{
    if(appendedTable)
    {
        let table = document.getElementById(`searchResultTable`);
        table.remove();
        appendedTable=false;
    }
    let searchInput = document.getElementById(`searchBkInput`);
    searchInput.value=``;
}


// add new book to array
const addBook = function()
{
    //alert("in add");
    let newBookInput = document.getElementById(`addBook`).elements;
    let newBook = {
        title: newBookInput.title.value,
        author: newBookInput.author.value,
        genere: newBookInput.genere.value,
        description: newBookInput.description.value
    };
    //alert(newBook.title);
    bookList.push(newBook);
}

window.onload = function ()
{
    // add listener to search book button
    let searchBkBtn = document.getElementById(`searchBkBtn`);
    searchBkBtn.addEventListener("click", handleSearchClick);

    // add listener to clear search book button
    let clearSearchBtn = document.getElementById(`searchBkClear`);
    clearSearchBtn.addEventListener("click", clearSearchBk);

    // add listener to add book button
    let addBkBtn = document.getElementById(`addBkBtn`);
    addBkBtn.addEventListener("click", addBook);
}
