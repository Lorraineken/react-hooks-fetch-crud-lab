import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
 
  const[fetchedData,setData] = useState([])
  

   useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then((response) =>response.json())
    .then((data) => {
      setData(data)
      
    })
   },[])
   
   const questions= fetchedData.map((item) => {
    
    return (
      <QuestionItem key={item.id} question ={
        {id:item.id,
         prompt:item.prompt,
         answers:item.answers,
         correctIndex:item.correctIndex
        }
      } />
    )
   })
    

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions}
      </ul>
    </section>
  );
}

export default QuestionList;
