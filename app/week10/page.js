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
            <section>
                { user ? (
                    <div>
                        <div className = "flex flex-col">       
                            <div className = "flex mx-auto">                            
                                <img src = { user.photoURL } alt = { user.displayName } className = "w-14 h-14 rounded-full m-2 "/>                 
                               <button className = "text-lg hover:underline p-2 rounded-md" onClick = {handleSignOut}>Sign Out</button>
                            </div>
                            <p className = "text-3xl text-center mt-10" >
                                Welcome, { user.displayName } 
                                <p>Your user ID is: {user.uid}</p> 
                            </p>
                        </div>
                        <ShoppingPage/>
                       
                    </div>
                ) : (
                    <div className = "flex flex-col items-center justify-center content-center">
                        <div>
                            <header>
                                <h1 className = "text-3xl text-center mt-10">Login Page</h1>
                            </header>
                            <p className = "text-center mt-5">Please sign in with GitHub to view your shopping list</p>
                            <div className = "flex flex-col w-60 mt-10 mx-auto">
                                <button className = "text-lg m-2 hover:bg-sky-600 bg-sky-500 p-2 rounded-md" onClick = {handleSignIn}>Sign In</button>
                            </div>
                        </div>
                    </div>                ) 
                }
            </section> 
        </main>
    );

}