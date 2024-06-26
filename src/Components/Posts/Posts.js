import React,{useEffect,useContext,useState} from 'react';
import {FirebaseContext} from '../../store/Context'

import Heart from '../../assets/Heart';
import './Post.css';
import {PostContext}  from '../../store/PostContext';
import { useHistory } from 'react-router-dom';



function Posts() {

const firebase=useContext(FirebaseContext)
const {setPostDetails}=useContext(PostContext)

const history=useHistory()

const [products,setProducts]=useState([])

useEffect(()=>{ //snapshot is just a name.you can anything here
  firebase.firestore().collection('products').get().then((snapshot)=>{
     const allPost=snapshot.docs.map((product)=>{ //docs is an array of objects inside it
        return {//data is a method in firebase to get a data of a document
          ...product.data(),
           id:product.id
        }
     })
    // console.log(allPost);
    setProducts(allPost)
  })
})

// firebase.firestore() gets an instance of Firestore (a NoSQL database from Firebase).
// .collection('products') accesses the 'products' collection in Firestore.
// .get() retrieves all the documents from the 'products' collection.
// .then((snapshot) => { ... }) waits for the data to be fetched and then runs the function inside once the data is available.
// const allPost = snapshot.docs.map((product) => { ... })

// snapshot.docs is an array of documents retrieved from the 'products' collection.
// .map((product) => { ... }) iterates over each document in the array, transforming each document into a new format defined inside the function.
// return { ...product.data(), id: product.id }

// product.data() is a function that returns all the data of the document as an object.
// { ...product.data(), id: product.id } creates a new object that combines all the data from the document (...product.data()) and adds a new key-value pair with the document's id (id: product.id).




  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

        {

products.map(product=>{

  return(
   <div className="card" onClick={()=>{

    setPostDetails(product)
    history.push('/view')
   }}>

   <div className="favorite">
     <Heart></Heart>
   </div>
   <div className="image">
     <img src={product.url}alt="" />
   </div>
   <div className="content">
     <p className="rate">&#x20B9; {product.price}</p>
     <span className="kilometer">{product.category}</span>
     <p className="name"> {product.name}</p>
   </div>
   <div className="date">
     <span>{product.createdAt}</span>
   </div>
 </div>
  )


})

}



        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">

{

products.map(product=>{

  return(
   <div className="card">
   <div className="favorite">
     <Heart></Heart>
   </div>
   <div className="image">
     <img src={product.url}alt="" />
   </div>
   <div className="content">
     <p className="rate">&#x20B9; {product.price}</p>
     <span className="kilometer">{product.category}</span>
     <p className="name"> {product.name}</p>
   </div>
   <div className="date">
     <span>{product.createdAt}</span>
   </div>
 </div>
  )


})

}



        </div>
      </div>
    </div>
  );
}

export default Posts;
