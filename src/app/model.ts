// Define in your component or service
export  interface Payment {
    date: Date;
    amount: number;
  }
  
  export interface Member {
    name: string;
    payments: Payment[];
  }
  
  export interface GroupData {
    groupId: string;
    members: Member[];
  }
  