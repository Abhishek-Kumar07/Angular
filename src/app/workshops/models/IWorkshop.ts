export type Category = 'frontend' | 'backend' | 'language' | 'database' | 'mobile' | 'devops';

export interface ILocation{
        address: string;
        city: string;
        state: string;
}

interface IModes {
    inPerson: boolean;
    online: boolean;
}


export default interface IWorkshop {
    name:string,
    category:Category,
    id:number,
    description: string,
    startDate: string,
    endDate: string,
    time: string,
    location: ILocation,
    modes: IModes;
    imageUrl: string;
}