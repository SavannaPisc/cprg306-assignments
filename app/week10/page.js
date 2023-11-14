"use client";

import { addNewItem, getShoppingList } from "./_services/shopping-list-service";
import { useUserAuth } from "./_utils/auth-context";
import ShoppingPage from "./shopping-list/page.js";

export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try{
            await gitHubSignIn();
        } catch(error){
            console.log(error);
        }
    }

    async function handleSignOut(){
        try{
            await firebaseSignOut();
        } catch(error){
            console.log(error);
        }
    }

    console.log(user);

    if(user){
        const items = getShoppingList( user.uid );        
        console.log(items);
    }

    let newItem = {
        name: "Bananas",
        category: "Produce",
        quantity: 4,
    }

    return(
        <main>
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>
                            Welcome { user.displayName }
                        </p>
                        <p>Your user ID is: {user.uid}</p> 
                        <button className = "text-lg m-2 hover:underline" onClick = {handleSignOut}>Sign Out</button>
                        <img src = { user.photoURL } alt = { user.displayName } className = "w-8 h-8"/>
                        <ShoppingPage/>
                       
                    </div>
                ) : (
                    <button className = "text-lg m-2 hover:underline" onClick = {handleSignIn}>Sign In</button>
                ) 
                }
            </section> 
        </main>
    );

}