import PocketBase from "pocketbase";

import React from 'react';
import {api} from "../constants/constants";

// Create a client
const pb = new PocketBase(api);

export async function Login() {
    if (!!pb?.authStore?.token) {
        console.log('Already connected');
    } else {
        console.log('Connecting...');
        await pb.collection('users').authWithPassword('Arhi', 'drt?pKR67Az9');
    }
}

export async function GetCandidate() {
    // you can also fetch all records at once via getFullList
    console.log('Fetching candidates...')
    return await pb.collection('candidate').getFullList(200 /* batch size */, {
        sort: '-created',
    });
}