export interface ICandidate {
    id: string;
    name: string;
    email: string;
    phone: string;
    description: string;
    items?: ICandidate[];
}