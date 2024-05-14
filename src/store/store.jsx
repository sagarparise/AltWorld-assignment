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
    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
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
      avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'

    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alicesmith@example.com",
      score: 72,
      behaviour: 8,
      communication: 6,
      situationHandling: 7,
      avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      score: 47,
      behaviour: 6,
      communication: 7,
      situationHandling: 5,
      avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emilybrown@example.com",
      score: 79,
      behaviour: 9,
      communication: 8,
      situationHandling: 6,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 5,
      name: "William Taylor",
      email: "williamtaylor@example.com",
      score: 41,
      behaviour: 7,
      communication: 9,
      situationHandling: 8,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
  ];

  return(
    <store.Provider value={{mockData, selectedMock, setSelectedMock}}>
      {children}
    </store.Provider>
  );

}

export default StoreProvider