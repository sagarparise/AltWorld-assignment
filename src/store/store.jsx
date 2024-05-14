import { createContext, useState } from "react";

export const store = createContext()
const StoreProvider = ({children})=>{

 const[selectedMock, setSelectedMock] = useState(
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    score: 85,
    behaviour: 7,
    communication: 9,
    situationHandling: 8,
  }
 )

  const mockData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      score: 85,
      behaviour: 7,
      communication: 9,
      situationHandling: 8,
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alicesmith@example.com",
      score: 72,
      behaviour: 8,
      communication: 6,
      situationHandling: 7,
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      score: 47,
      behaviour: 6,
      communication: 7,
      situationHandling: 5,
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emilybrown@example.com",
      score: 79,
      behaviour: 9,
      communication: 8,
      situationHandling: 6,
    },
    {
      id: 5,
      name: "William Taylor",
      email: "williamtaylor@example.com",
      score: 41,
      behaviour: 7,
      communication: 9,
      situationHandling: 8,
    },
  ];

  return(
    <store.Provider value={{mockData, selectedMock, setSelectedMock}}>
      {children}
    </store.Provider>
  );

}

export default StoreProvider