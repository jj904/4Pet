import admin, { firestore } from 'firebase-admin';
import httpStatus, { NOT_FOUND } from 'http-status';
import { db } from '../db';

export const getPets = async(req: any, res: any, next: any) => {
    console.log("Called getPets method");
    const { accountId } = req.params;
    console.log("Account id: " + accountId);
    try {
        const usersPets = await db.collection('Users').doc(accountId).collection('Pets').get();
        let temp: any = [];
        usersPets.forEach(doc => {
            let pet = {
                petName: doc.get('petName'),
                petType: doc.get('petType'),
                petLink: doc.get('bg_img')
            }
            console.log(pet);
            temp.push(pet);
        })
        res.status(httpStatus.OK).json(temp);
    } catch (err) {
        console.log("Could not get pets");
        next(err);
    }
}

export const getAllPets = async(req: any, res: any, next: any) => {
    console.log("Called getAllPets method");
    let temp: any = [];
    let userId: any[] = [];
    let userName: any[] = [];
    let userZip: any[] = [];
    const usersPets = await db.collection('Users').get();
    usersPets.forEach(doc => {
        let uid = doc.get('uid');
        let name = doc.get('username');
        let zip = doc.get('zipcode');
        userId.push(uid);
        userName.push(name);
        userZip.push(zip);
        //console.log(doc.get('uid'));
    })
    console.log('---------------------');
    console.log(userId);
    console.log('---------------------');
    try {
        for (let i = 0; i < userId.length; i++) {
            let pets = await db.collection('Users').doc(userId[i]).collection('Pets').get();
            pets.forEach(doc2 => {
                let pet = {
                    user: userName[i],
                    userZip: userZip[i],
                    petName: doc2.get('petName'),
                    petType: doc2.get('petType'),
                    petLink: doc2.get('bg_img')
                }
                console.log(pet);
                temp.push(pet);
            })
        }
        res.status(httpStatus.OK).json(temp);
    } catch (err) {
        console.log("Could not get pets");
        next(err);
    }
}

export const getCertainPets = async(req: any, res: any, next: any) => {
    console.log("Called getAllPets method");
    const { petType } = req.params
    let temp: any = [];
    let userId: any[] = [];
    let userName: any[] = [];
    let userZip: any[] = [];
    const usersPets = await db.collection('Users').get();
    usersPets.forEach(doc => {
        let uid = doc.get('uid');
        let name = doc.get('username');
        let zip = doc.get('zipcode');
        userId.push(uid);
        userName.push(name);
        userZip.push(zip);
        //console.log(doc.get('uid'));
    })
    console.log('---------------------');
    console.log(userId);
    console.log('---------------------');
    try {
        for (let i = 0; i < userId.length; i++) {
            let pets = await db.collection('Users').doc(userId[i]).collection('Pets').get();
            
            pets.forEach(doc2 => {
                if(doc2.get('petType') === petType) {
                    let pet = {
                        user: userName[i],
                        userZip: userZip[i],
                        petName: doc2.get('petName'),
                        petType: doc2.get('petType'),
                        petLink: doc2.get('bg_img')
                    }
                    console.log(pet);
                    temp.push(pet);
                }
            })
        }
        res.status(httpStatus.OK).json(temp);
    } catch (err) {
        console.log("Could not get pets");
        next(err);
    }
}

export const petMatching = async(req: any, res: any, next: any) => {
    console.log("Called getAllPets method");
    const { petType } = req.params;
    const { accountId } = req.params;
    let temp: any = [];
    let userId: any[] = [];
    let userName: any[] = [];
    let userZip: any[] = [];
    const usersPets = await db.collection('Users').get();
    usersPets.forEach(doc => {
        let uid = doc.get('uid');
        let name = doc.get('username');
        let zip = doc.get('zipcode');
        userId.push(uid);
        userName.push(name);
        userZip.push(zip);
        //console.log(doc.get('uid'));
    })
    console.log('---------------------');
    console.log(userId);
    console.log('---------------------');
    try {
        for (let i = 0; i < userId.length; i++) {
            let pets = await db.collection('Users').doc(userId[i]).collection('Pets').get();
            console.log(userId + " " + accountId + " " + userId[i] != accountId);
            pets.forEach(doc2 => {
                if(doc2.get('petType') === petType && userId[i] != accountId) {
                    let pet = {
                        user: userName[i],
                        userZip: userZip[i],
                        petName: doc2.get('petName'),
                        petType: doc2.get('petType'),
                        petLink: doc2.get('bg_img')
                    }
                    console.log(pet);
                    temp.push(pet);
                }
            })
        }
        res.status(httpStatus.OK).json(temp);
    } catch (err) {
        console.log("Could not get pets");
        next(err);
    }
}