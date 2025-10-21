import { Routes } from '@angular/router';
import { FamilyMembers } from './components/family-members/family-members';
import { AddFamilyMember } from './components/add-family-member/add-family-member';


export const FAMILY_TREE_ROUTES: Routes = [
  { path: '', component: FamilyMembers },
  { path: 'add-new-family-member', component: AddFamilyMember },
];