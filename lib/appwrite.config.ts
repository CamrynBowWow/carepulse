import * as sdk from 'node-appwrite';

export const {
	PROJECT_ID,
	API_KEY,
	DATABASE_ID,
	PATIENT_COLLECTION_ID,
	DOCTOR_COLLECTION_ID,
	APPOINTMENT_COLLECTION_ID,
	NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
	NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// NEXT_PUBLIC_BUCKET_ID: BUCKET_ID, renaming it to make it easier to get

const client = new sdk.Client();

// !: is so that app knows that its there and exists
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
