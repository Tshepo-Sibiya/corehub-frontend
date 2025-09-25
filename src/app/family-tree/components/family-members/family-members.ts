import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from '../../services/family-tree';
import { FamilyMemberModel } from '../../models/family-member.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-family-members',
  imports: [CommonModule],   // 👈 Required
  templateUrl: './family-members.html',
  styleUrl: './family-members.scss'
})
export class FamilyMembers implements OnInit {
  familyMemberModel: any;

  constructor(private itemService: FamilyTreeService) { }

  ngOnInit(): void {
    this.itemService.getFamilyMembers().subscribe({
      next: (data) => {
        console.log('Fetched familyMemberModel:', data);
        // Assign data directly, ensuring birthDate is a Date object
        this.familyMemberModel = data
          .map(member => ({
            ...member,
            birthDate: member.birthDate ? new Date(member.birthDate) : new Date(0), // fallback to epoch if missing
            firstName: member.firstName || '',
            lastName: member.lastName || '',
            generation: member.generation || '',
            id: member._id || ''
          }))
          .sort((a, b) => a.firstName.localeCompare(b.firstName));


      },
      error: (err) => console.error('Error fetching familyMemberModel', err)
    });
  }

  formatBirthDate(dateString: string | Date): string {
    if (!dateString) return '';
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    if (isNaN(date.getTime())) return '';
    // Format as YYYY-MM-DD
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

