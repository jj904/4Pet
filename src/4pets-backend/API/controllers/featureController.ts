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
        res.status(httpStatus.OK).json(resp.data);
    } catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
         
}