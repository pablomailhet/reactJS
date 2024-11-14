import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyA9r9xNzD-B2OCayYLdIG4DySFfycvU6I4",
	authDomain: "reactjs-a423f.firebaseapp.com",
	projectId: "reactjs-a423f",
	storageBucket: "reactjs-a423f.appspot.com",
	messagingSenderId: "627737682662",
	appId: "1:627737682662:web:943adc741aeef072835127"
}

initializeApp(firebaseConfig)

const db = getFirestore()

const collectionCategories = collection(db, "categories")

const collectionItems = collection(db, "items")

const collectionOrders = collection(db, "orders")

export { db, collectionCategories, collectionItems, collectionOrders }