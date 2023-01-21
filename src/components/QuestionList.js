import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionsData,onDeleteQuestion}) {
  
   
   const questions= questionsData.map((item) => {
    
    return (
      <QuestionItem key={item.id} question ={
        {id:item.id,
         prompt:item.prompt,
         answers:item.answers,
         correctIndex:item.correctIndex
        }
      } onDeleteQuestion={onDeleteQuestion}/>
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
