import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Person {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  phone?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title = 'Address-Book';
  people: Person[] = [
    {
      name: 'Alice Smith',
      address: '321 Elm St',
      city: 'Riverdale',
      state: 'CA',
      zipcode: '90001',
      phone: '310-555-1234',
    },

    {
      name: 'Bob Johnson',
      address: '654 Pine St',
      city: 'Mapleton',
      state: 'TX',
      zipcode: '75001',
      phone: '214-555-5678',
    },

    {
      name: 'Charlie Brown',
      address: '987 Oakwood Dr',
      city: 'Lakeside',
      state: 'FL',
      zipcode: '32003',
      phone: '904-555-7890',
    },
  ];

  newPerson: Person = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
  };
  editMode: boolean = false;
  personToEdit: Person | null = null;
  showForm: boolean = false;

  constructor() {
    console.log(this.people);
  }

  addPerson() {
    this.newPerson = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
    };
    this.editMode = false;
    this.showForm = true;
  }

  editPerson(person: Person) {
    this.personToEdit = person;
    this.newPerson = { ...person };
    this.editMode = true;
    this.showForm = true;
  }

  savePerson() {
    // Validate form fields
    if (
      !this.newPerson.name ||
      !this.newPerson.address ||
      !this.newPerson.city ||
      !this.newPerson.state ||
      !this.newPerson.zipcode ||
      !this.newPerson.phone
    ) {
      alert('Please fill in all the fields.');
      return;
    }

    if (this.editMode && this.personToEdit) {
      const index = this.people.findIndex((p) => p === this.personToEdit);
      if (index !== -1) {
        this.people[index] = { ...this.newPerson };
      }
    } else {
      this.people.push({ ...this.newPerson });
    }
    this.resetForm();
  }

  resetForm() {
    this.newPerson = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
    };
    this.editMode = false;
    this.showForm = false;
    this.personToEdit = null;
  }

  deletePerson(person: Person) {
    this.people = this.people.filter((p) => p !== person);
  }
}
