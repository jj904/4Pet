import admin, { firestore } from 'firebase-admin';
import httpStatus, { NOT_FOUND } from 'http-status';
import { db } from '../db';

export const getAccounts = async(req: any, res: any, next: any) => {
    console.log("Called getAccounts method");

    try {
        db.collection('Users').get().then((snapshot) => {
            snapshot.docs.map((doc => doc.data));
            res.status(httpStatus.OK).json(snapshot.docs);
        })
    } catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
}
export const getAccount = async(req: any, res: any, next: any) => {
    console.log("Called getAccount method");
    
    const { accountId } = req.params;

    try {
        const accRef = db.collection('Users').doc(accountId);
        let doc = await accRef.get();
        if (!doc.exists) {
            admin.auth().getUserByEmail(accountId).then(async (user) => {
                    await accRef.set({email: accountId});
                    doc = await accRef.get();
                })
                .catch((er) => {
                    console.log("User does not exist");
                    res.status(NOT_FOUND).send('User does not exist');
                });
             
        } else
            res.status(httpStatus.OK).json(doc.data());
    } catch (err) {
        console.log("Could not get account");
        next(err);
    }
}

export const createAccount = async(req: any, res: any, next: any) => {
    console.log("Called createAccount method cringe");
    try {
        const {name, password, zipcode, email, pet, phone} = req.body;
        const toAdd = {
            name,
            password,
            zipcode,
            email,
            pet,
            phone
        }
        const ret = await db.collection('Users').doc(email).set(toAdd, {merge:true});
        console.log("Created");
        const accRef = db.collection('Users').doc(email);
        const doc = await accRef.get();
        res.status(httpStatus.OK).json(doc.data());
    } catch(err) {
        console.log("Could not create new account");
        next(err);
    }
}



export const deleteAccount = async(req: any, res: any, next: any) => {
    console.log("Called deleteAccount method");
    const { accountId } = req.params;

    try {
        const accRef = db.collection('Users').doc(accountId);
        const doc = await accRef.get();
        if (!doc.exists) {
            console.log("Account does not exist!");
        }
        else {
            db.collection('Users').doc(accountId).delete();
            console.log("Deleted");
        }
        res.status(httpStatus.OK);
    } catch(err) {
        console.log("Could not delete account");
        next(err);
    }
}

export const registerAccount = async(req: any, res: any, next: any) => {
    console.log("Called registerAccount method");
    // try {
    //     const {username, email, password} = req.body;
    //     const toRegister = {
    //         username,
    //         email,
    //         password
    //     }
    //     //const ret = await db.collection('Users').doc(email).set(to, {merge:true});
        
    //     firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
    //         console.log(result);
    //         console.log(result.user);
    //         //result.user.updateProfile( {displayName: name} )
    //     })
    //     console.log("Created");
    //     const accRef = db.collection('Users').doc(email);
    //     const doc = await accRef.get();
    //     res.status(httpStatus.OK).json(doc.data());
    // } catch(err) {
    //     console.log("Could not create new account");
    //     next(err);
    // }
}

export const loginAccount = async(req: any, res: any, next: any) => {
    console.log("Called loginAccount method");
}