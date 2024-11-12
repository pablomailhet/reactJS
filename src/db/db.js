import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID
}

initializeApp(firebaseConfig)

const db = getFirestore()

const collectionCategories = collection(db, "categories")

const collectionItems = collection(db, "items")

const collectionOrders = collection(db, "orders")

export { db, collectionCategories, collectionItems, collectionOrders }