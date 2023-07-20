import { openDB } from 'idb';

//intiates the jate database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  try {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id:1, value:content });
    const result = await request;
    console.log('Data saved to the database', result);
  } catch (error) {
    console.error('Error while putting data into the database:', error);
  }
}

// Method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  try {
    const db = await openDB('jate');
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('Data retrieved from the database');
    return result;
  } catch (error) {
    console.error('Error while getting data from the database:', error);
    return null;
  }
}

initdb();