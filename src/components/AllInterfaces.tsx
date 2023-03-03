export interface userData {
    name: string;
    email: string;
    passwrod: string;
    userName: string;
    phoneNumber: number;
    accountNumber: number;
    verified: boolean;
    isAdmin: boolean;
    wallet: {}[];
    history: {}[];
}


export interface walletData {
    balance: number;
    credit: number;
    debit: number;
}

export interface historyData {
    message: string;
    transactionRef: number;
    transactionType: String;
}

export interface Quick {
	amount: number;
	autoSave: boolean;
	dateTime: number | string;
	interest: number;
}

export interface Locks {
	amount: number;
	PayBackTime: string;
	interest: number;
	lock: boolean;
	title: string;
}

export interface TargetData {
	amount: number;
	fixedAmount: number;
	interest: number;
	dateTime: string;
	title: string;
	targetValue: boolean;
    targetBalance: Number;
}

export interface investment {
    title: string;
    perentageInterest: number;
    amountPerUnit: number;
    description: string;
    investors: {}[];
    startTime: string;
    duration: string;
    category: string; 
    status: boolean;
    totalUnit: number;
}

export interface investorData {
    investorId: string;
    amount: string;
    unit: number;
}