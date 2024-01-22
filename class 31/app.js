// https://firebase.google.com/docs/web/setup#add-sdks-initialize
// Replace Service name with Actual Service name that is like app, firestore or auth
// import { } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-SERVICE.js'

// Firestore Documentation
// https://firebase.google.com/docs/firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Copy From Firebase project that you have created
const firebaseConfig = {
  apiKey: "AIzaSyDNMiv4BLXi6-u34HwDXtzEzhK6PL7ZCBI",
  authDomain: "ameen-firebase-learn.firebaseapp.com",
  projectId: "ameen-firebase-learn",
  storageBucket: "ameen-firebase-learn.appspot.com",
  messagingSenderId: "654124607655",
  appId: "1:654124607655:web:61c5474daf83eaeec65382",
  measurementId: "G-3CFL5GC14L",
};

// Initialize Firebase here
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addData = document.getElementById("addData");
const todoInput = document.getElementById("todoInput");
const testData = document.getElementById("testData");
const blogList = document.getElementById("blogList");

const addDataInFirestore = async () => {
  const inputVal = todoInput.value;
  // console.log(inputVal)
  // const timestamp = new Date().getTime()
  // const payload = {
  //     id: timestamp,
  //     todo: inputVal,
  //     timestamp,
  // }
  // try {
  //     const docRef = await addDoc(collection(db, "todos"), payload);
  //     console.log("Document written with ID: ", docRef);
  //     todoInput.value = ""
  // } catch (e) {
  //     console.error("Error adding document: ", e);
  // }

  const id = new Date().getTime();

  const payload = {
    id,
    todo: inputVal,
    timestamp: id,
  };

  await setDoc(doc(db, "blog", `${id}`), payload);
  todoInput.value = "";
};

const testing = async () => {
  // const id = new Date().getTime()

  // await setDoc(doc(db, "blog", `${id}`), {
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA",
  //     id
  // });

  // const ref = doc(db, "blog", "1705837638682");

  // // Set the "capital" field of the city 'DC'
  // await updateDoc(ref, {
  //     country: "IND"
  // });

  // , where("capital", "==", true))

  let arr = [];
  let item = "";
  const q = query(collection(db, "blog"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data);
    console.log(doc.id, " => ", doc.data());
    item += `<li> ${doc.data().name}</li>`;
  });

  blogList.innerHTML = item;
};

const getDataInRealTime = async () => {
  console.log("abd");
  let item = "";
  const q = query(collection(db, "blog"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data());
    });
    console.log(cities);
    item = cities.map((todoObj) => `<li>${todoObj.todo}</li>`).join("");
    blogList.innerHTML = item;
  });
};

getDataInRealTime();

addData.addEventListener("click", addDataInFirestore);
testData.addEventListener("click", testing);
