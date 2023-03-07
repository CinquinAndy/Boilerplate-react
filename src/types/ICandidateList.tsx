import {ICandidate} from "./ICandidate";

export interface ICandidateList{
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: ICandidate[];
}