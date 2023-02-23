import PocketBase from "pocketbase";

import React from 'react';
import {api} from "../constants/constants";
import {IAuth} from "../types/IAuth";

// Create a client
const pb = new PocketBase(api);

export async function Login(logs: IAuth) {
    if (!!pb?.authStore?.token) {
        console.log('Already connected');
    } else {
        console.log('Connecting...');
        await pb.collection('users').authWithPassword(logs.identity, logs.password);
    }
}

// Logout
export async function Logout() {
    await pb.authStore.clear();
}

export async function FetchCandidate() {
    // you can also fetch all records at once via getFullList
    console.log('Fetching candidates...')
    return await pb.collection('candidate').getFullList(200 /* batch size */, {
        sort: '-created',
    });
}