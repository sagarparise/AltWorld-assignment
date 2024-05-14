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
      avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/933.jpg'
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      score: 47,
      behaviour: 6,
      communication: 7,
      situationHandling: 5,
      avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg'

    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emilybrown@example.com",
      score: 79,
      behaviour: 9,
      communication: 8,
      situationHandling: 6,
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg'
    },
    {
      id: 5,
      name: "William Taylor",
      email: "williamtaylor@example.com",
      score: 41,
      behaviour: 7,
      communication: 9,
      situationHandling: 8,
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/651.jpg"
    },
  ];

  return(
    <store.Provider value={{mockData, selectedMock, setSelectedMock}}>
      {children}
    </store.Provider>
  );

}

export default StoreProvider