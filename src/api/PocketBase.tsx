import PocketBase from "pocketbase";

import React from 'react';
import {IAuth} from "../types/IAuth";
import {ICandidate} from "../types/ICandidate";

// Create a client
const pb = new PocketBase("http://arhi-api.beta.andy-cinquin.fr");

/**
 * Login
 * @param logs
 * @constructor
 */
export async function PocketLogin(logs: IAuth) {
    console.log('Logging in...')
    if (!!pb?.authStore?.token) {
        console.log('Already connected');
    } else {
        console.log('Connecting...');
        await pb.collection('users').authWithPassword(logs.identity, logs.password);
    }
}

/**
 * Check if logged in or not
 * @constructor
 */
export function PocketCheckLogin() {
    // Check if already connected
    console.log('Checking login...')
    if (!!pb?.authStore?.token) {
        console.log('Already connected');
        return true;
    } else {
        console.log('Not connected');
        return false;
    }
}

/**
 * Logout
 * @constructor
 */
export async function PocketLogout() {
    console.log('Logging out...')
    pb.authStore.clear();
}

/**
 * Fetch all candidates
 * @constructor
 */
export function PocketFetchCandidate() {
    // you can also fetch all records at once via getFullList
    console.log('Fetching candidates...')
    return pb.collection('candidate').getFullList(200 /* batch size */, {
        sort: '-created',
    });
}

/**
 * Update candidate
 * @param id
 * @param data
 * @constructor
 */
export function PocketPatchCandidate(id: string, data: ICandidate) {
    console.log('Patching candidate...')
    return pb.collection('candidate').update(id, data);
}
