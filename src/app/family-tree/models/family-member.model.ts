export interface FamilyMemberModel {
    _id: string;    
    firstName: string;
    lastName: string;
    gender: 'male' | 'female' | 'other';
    birthDate: Date;
    generation: number;
}