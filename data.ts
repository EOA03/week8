interface Tracker{
    id: number,
    type: string,
    name: string,
    amount: number,
    date: string,
    details: string,
}

export let trackers:Tracker[] = [
    {id: 1, 
     type:"Expexse",
     name:"Belanja",
     amount:200000,
     date:"2023-08-05",
     details:"belanja bahan makan",},
    {id: 2,
     type:"Expense",
     name:"Jajan",
     amount:100000,
     date:"2023-08-07",
     details:"jajan sore",},
]