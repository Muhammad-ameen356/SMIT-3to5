import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWLFcm0vp5Xmru6KvkkslRVdm1CQ_p_W8",
    authDomain: "saylani-class-chat-ameen.firebaseapp.com",
    projectId: "saylani-class-chat-ameen",
    storageBucket: "saylani-class-chat-ameen.appspot.com",
    messagingSenderId: "280595088846",
    appId: "1:280595088846:web:3771754d174218c183179f",
    measurementId: "G-KV5CZYGRVS",
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();

const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn");
const logoutBtn = document.getElementById("logoutBtn");
const changeTheme = document.getElementById("changeTheme")
const email = document.getElementById("email")
const password = document.getElementById("password")
const signup = document.getElementById("signup")
const fileInput = document.getElementById("fileInput")
const uploadImgBtn = document.getElementById("uploadImgBtn")

changeTheme && changeTheme.addEventListener("click", () => {
    const htmla = document.getElementsByTagName("html")[0]
    htmla.setAttribute("data-theme", "dracula")

})

const currentPageName = window.location.pathname.split("/").pop();

const onLoad = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (currentPageName !== "chatapp.html") {
                window.location.href = "chatapp.html";
            }
            console.log(user);
        } else {
            if (currentPageName !== "index.html" && currentPageName !== "") {
                window.location.href = "/";
            }

            console.log("User Is not Logged In!");
        }
    });
};

onLoad();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
};

const logOut = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
};


const signupUser = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

        });
}

const uploadBlog = () => {
    const fileValue = fileInput.files[0]
    if (fileValue) {
        uploadImage()
    } else {

    }
}

const uploadMsgDB = () => {

}

const uploadImage = () => {
    const fileValue = fileInput.files[0]

    console.log(fileValue, "fileValue")


    const metadata = {
        contentType: fileValue.type,
        name: fileValue.name,
        size: fileValue.size
    };

    const storageRef = ref(storage, `images/${fileValue.name}_${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, fileValue, metadata);

    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                console.log('File available at', downloadURL);
            });
        }
    );
}

signup &&
    signup.addEventListener("click", signupUser);
uploadImgBtn &&
    uploadImgBtn.addEventListener("click", uploadImage);

loginWithGoogleBtn &&
    loginWithGoogleBtn.addEventListener("click", signInWithGoogle);

logoutBtn && logoutBtn.addEventListener("click", logOut);
