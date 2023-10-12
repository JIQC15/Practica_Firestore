//conexion a firebase, firestore y credenciales
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

    import { getFirestore,
        collection,
        getDocs,
        onSnapshot,
        addDoc,
        deleteDoc,
        doc,
        getDoc,
        updateDoc, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

  //
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC7zar7coZewW_hGkfASL_D2R5i3YKITFs",
    authDomain: "firestoredb-e26de.firebaseapp.com",
    projectId: "firestoredb-e26de",
    storageBucket: "firestoredb-e26de.appspot.com",
    messagingSenderId: "209388770091",
    appId: "1:209388770091:web:92ffbba2d464534dc36b6e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  /**
  * Save a New Task in Firestore
  * the title of the Task
  *  the description of the Task
  */
export const saveTask = (title, description) =>
addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
onSnapshot(collection(db, "tasks"), callback);

/**
*
* Task ID
*/
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));

