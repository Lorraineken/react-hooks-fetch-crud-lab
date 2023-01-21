import React, { useState ,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const[fetchedData,setData] = useState([])
  

  useEffect(() =>{
   fetch("http://localhost:4000/questions")
   .then((response) =>response.json())
   .then((data) => {
     setData(data)
     
   })
  },[])

  function addData(newData){
    const updateData = [...fetchedData,newData]
    setData(updateData)
    console.log(fetchedData)
  }

  function deleteQuestion(id){
    const updatedQuestion = fetchedData.filter((data) => data.id !== id)
    setData(updatedQuestion)
  }


  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddData={addData} /> : <QuestionList questionsData={fetchedData} onDeleteQuestion={deleteQuestion}/>}
    </main>
  );
}

export default App;
