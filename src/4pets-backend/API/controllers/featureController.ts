import { response } from 'express';
import admin, { firestore } from 'firebase-admin';
import { get } from 'http';
import httpStatus from 'http-status';
import { features } from 'process';
import { db } from '../db';

//import * as featureServices from '../services/featureServices';

export const zipFeature = async(req: any, res: any, next: any) => {
    console.log("Called zipFeature method");
    const API_KEY = 'js-9a3c27efa25ed3045c89f6673c202451';
    const { zipCode } = req.params;
    console.log(zipCode);
    const zipcodelink = "https://service.zipapi.us/zipcode/"+zipCode+"?X-API-KEY=" + API_KEY;
    const axios = require('axios');
    const params = new URLSearchParams([['X-API-KEY', API_KEY]]);
    const resp = await axios.get('https://service.zipapi.us/zipcode/'+ zipCode, {params}).catch();
    try {
        console.log(zipcodelink);
        //console.log(resp);
        resp.data.args
        res.status(httpStatus.OK).json(resp.data); //resp.data to get whole resp.data.data.city to get city
    } catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
         
}

export const zipMatching = async(req: any, res: any, next: any) => {
    console.log("Called zipMatching method");
    const { zipCode } = req.params;
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
                if(zipCode === userZip[i]) {
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

export const zipFilterMatching = async(req: any, res: any, next: any) => {
    console.log("Called zipMatching method");
    const { zipCode } = req.params;
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
            pets.forEach(doc2 => {
                if(zipCode === userZip[i] && accountId != userId[i]) {
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

export const zipPetFilterMatching = async(req: any, res: any, next: any) => {
    console.log("Called zipMatching method");
    const { zipCode } = req.params;
    const { accountId } = req.params;
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
                if(zipCode === userZip[i] && accountId != userId[i] && petType === doc2.get('petType')) {
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