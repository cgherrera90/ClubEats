import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Favorites.module.css';

const Favorites = () => {

//     //Create function to add favorited books to a favorites list
// const favorite = (book) => {
//     if (book.favorite !== true) book.favorite = true
//     else book.favorite = false
// }

//     //Create function to add a book to the bookList
// const addBookInput = document.querySelector(".add-book-input");
// function addBook(book) {
//     return bookList.push(book.title.includes(add-book-input.value));
// }

// //Add a button that will add a book to the list
// const addBookButton = document.querySelector(".add-book-button");
// addBookButton.addEventListener("click", () => {
// console.log("Add Book")
// renderAllBooks(addBook(bookList));
// })
   

    return (
        <div>
            <div className={styles.navbarContainer}>
                <Navbar />
            </div>
            <div className={styles.favoritesContainer}>
                <div className={styles.favorites}>
                    <h2>Your Favorite Restaurants:</h2>
                    <p>Here will be a list of favorited restaurants</p>
                    {/* <div>{renderFavorites}</div> */}
                </div>
            </div>
        </div>
    )
}

export default Favorites;