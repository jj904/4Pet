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

        res.status(httpStatus.OK).json({pets: temp})
    } catch (err) {
        console.log("Could not get pets");
        next(err);
    }
}