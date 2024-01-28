import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCWLFcm0vp5Xmru6KvkkslRVdm1CQ_p_W8",
    authDomain: "saylani-class-chat-ameen.firebaseapp.com",
    projectId: "saylani-class-chat-ameen",
    storageBucket: "saylani-class-chat-ameen.appspot.com",
    messagingSenderId: "280595088846",
    appId: "1:280595088846:web:3771754d174218c183179f",
    measurementId: "G-KV5CZYGRVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn")
const logoutBtn = document.getElementById("logoutBtn")



const currentPageName = window.location.pathname.split("/").pop();


const onLoad = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (currentPageName !== "chatapp.html") {
                window.location.href = "chatapp.html"
            }
            console.log(user)
        } else {

            if (currentPageName !== "index.html" && currentPageName !== "") {
                window.location.href = "/"
            }

            console.log("User Is not Logged In!")
        }
    });
}

onLoad()




const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });
}

const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


loginWithGoogleBtn && loginWithGoogleBtn.addEventListener("click", signInWithGoogle)

logoutBtn && logoutBtn.addEventListener("click", logOut)








