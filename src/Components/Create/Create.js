import React, { Fragment,useContext,useEffect,useState } from 'react'; // Fragment  lets you group multiple elements without adding any extra DOM nodes:
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {

  const firebase=useContext(FirebaseContext)
  const {user} =useContext(AuthContext)

  const history=useHistory()

  const date=new Date()

  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState('');// This initializes the state variable price with an empty string (''). When you initialize a state variable with an empty string, you're providing a default value that is an empty string.
  const [image,setImage]=useState(null);//The argument passed to useState is the initial state value, which in this case is null. This means that when the component first renders, the image state will be null.

  const handleSubmit=()=>{
           firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{//firebase.storage(): Accesses Firebase storage service..ref(/image/${image.name}): Specifies the path where the image will be stored. Here, /image/ is the directory, and image.name is the filename..put(image): Uploads the image file to the specified path.
              ref.getDownloadURL().then((url)=>{ //ref is the reference to the uploaded file in Firebase storage.then Retrieves the download URL of the uploaded file. url contains the publicly accessible URL of the uploaded file. This URL can be used to display the image or share it with others
                // console.log('Link is working',url);
                firebase.firestore().collection('products').add({
                  name:name,
                  category:category,
                  price:price,
                  url:url,
                  userId:user.uid,
                  createdAt:date.toDateString()
                })

                history.push('/')

              })

           })
  }

  return (
    <Fragment>
      <Header />
      <div>
        <div className="centerDiv">

            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={(e)=>setName(e.target.value)}
              value={name}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}

              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price}  onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />

          <br />
 <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
 {/*it checks if the image variable is truthy (image is not null, undefined, false, or an empty string). If image is truthy, it uses URL.createObjectURL(image) to create a URL representing the image file. If image is falsy, it sets the src attribute to an empty string (''), effectively not displaying any image. */}

            <br />
            <input  onChange={(e)=>setImage(e.target.files[0])} type="file" />{/*This accesses the first file in the FileList. In this case, since it's a single file input (type="file"), there will generally be only one file, so [0] accesses this file. */}
            <br />
            <button  onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </div>
    </Fragment>
  );
};
export default Create;
