
import {initializeApp} from "firebase/app"
import {
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import {getFirestore, collection, addDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD0uHJeNFXe5Q8lWxNcUhi7MbzQrVMrlZQ",
    authDomain: "just-food001.firebaseapp.com",
    projectId: "just-food001",
    storageBucket: "just-food001.appspot.com",
    messagingSenderId: "272692206423",
    appId: "1:272692206423:web:9efb10beb3eac580fc3c12"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signIn = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.error(err);
        alert(err.message)
    }
}

const signUp = async (name, email, password) => {
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        await updateProfile(user, { displayName: name});
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logOut = () => {
    signOut(auth);
}

export {
    auth,
    db, 
    signIn,
    signUp,
    logOut,
}
export const Firebase = () => {
  return (
    <div>Firebase</div>
  )
}
