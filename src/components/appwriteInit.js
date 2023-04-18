import { Client, Databases } from 'appwrite';

const PROJECT_ID = '643f07df49bac805c762';
const DATABASE_ID = '643f0aeb2060269cf5f7';
const COLLECTION_ID = '643f0c1d50878570620f';

const client = new Client();

const databases = new Databases(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

export const getStudentData = () =>
    databases.listDocuments(DATABASE_ID, COLLECTION_ID);
