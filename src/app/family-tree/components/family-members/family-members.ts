import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from '../../services/family-tree-services';
import { FamilyMemberModel } from '../../models/family-member.model';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { formatDateToReadable } from '../../../shared/utilities/utilities';



@Component({
  selector: 'app-family-members',

  imports: [CommonModule, MatIconModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatMenuModule],
  templateUrl: './family-members.html',
  styleUrl: './family-members.scss'
})
export class FamilyMembers implements OnInit {
  familyMemberModel: any;

  constructor(private itemService: FamilyTreeService, private navigationService: NavigationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemService.getFamilyMembers().subscribe({
      next: (data) => {
        console.log('Fetched familyMemberModel:', data);
        // Assign data directly, ensuring birthDate is a Date object
        this.familyMemberModel = data
          .map(member => ({
            ...member,
            birthDate: formatDateToReadable(member.birthDate || ''),
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

  viewDetails(memberId: string) {
    this.router.navigate([memberId], { relativeTo: this.route });
  }

  editMemeber(memberId: string) {
    this.router.navigate([memberId, 'edit'], { relativeTo: this.route });
  }

  deteleteMember(memberId: string) {
    // if (confirm('Are you sure you want to delete this member?')) {
    //   this.itemService.deleteFamilyMember(memberId).subscribe({
    //     next: () => {
    //       // Refresh the list after deletion
    //       this.familyMemberModel = this.familyMemberModel.filter((member: FamilyMemberModel) => member._id !== memberId);
    //     },
    //     error: (err) => console.error('Error deleting member', err)
    //   });
    // }
  }

  goBack(): void {
    this.navigationService.goBack(); // Navigates to the previous route
  }

  addMember() {
    this.router.navigate(['add-new-family-member'], { relativeTo: this.route });
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

