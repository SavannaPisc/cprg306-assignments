import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Adds a new item to the database for a specific user
export async function addNewItem(userId, item) {
  try {
    let userItemsCollection = collection(db, "users", userId, "items");
    let addItemPromise = await addDoc(userItemsCollection, item);
    console.log(addItemPromise.id);
    return addItemPromise;
  } catch (error) {
    console.log(error);
  }
}

// Retrieves list items from the database for a specific user
export async function getShoppingList(userId, updateItems) {
  try {
    //userItemsCollection is the path to the collection in the database as a reference
    let userItemsCollection = collection(db, "users", userId, "items");
    let collectionSnapshot = await getDocs(userItemsCollection);
    let shoppingList = [];
    // Takes each object from the database and adds it into an array containing ID and data
    collectionSnapshot.forEach((document) => {
      let thisItem = {
        id: document.id,
        ...document.data(),
      };
      //console.log(document.id, " - ", document.data());
      shoppingList.push(thisItem);
    });
    console.log(shoppingList);
    // return shoppingList;
    updateItems(shoppingList);
  } catch (error) {}
}
