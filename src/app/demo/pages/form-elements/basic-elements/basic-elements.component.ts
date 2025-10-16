import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Vehicle {
  id: number | null;
  longitude: number;
  latitude: number;
  marque: string;
  modele: string;
  anneeFabrication: number;
  kilometrage: number;
  numeroSerie: string;
  couleur: string;
  typeCarburant: string;
  prix: number;
  caracteristiquesSupplementaires: string;
  customsSavings: number;
}

@Component({
  standalone: false,
  selector: 'app-vehicle-form',
  templateUrl: './basic-elements.component.html', // Fixed template path
  styleUrls: ['./basic-elements.component.scss']  // Fixed style path
})
export class VehicleFormComponent implements OnInit {
  currentYear = new Date().getFullYear();
  vehicle: Vehicle = {
    id: null,
    longitude: 10.1815,  // Default Tunis coordinates
    latitude: 36.8065,
    marque: '',
    modele: '',
    anneeFabrication: this.currentYear,
    kilometrage: 0,
    numeroSerie: '',
    couleur: '',
    typeCarburant: 'GASOLINE',
    prix: 0,
    caracteristiquesSupplementaires: '',
    customsSavings: 0
  };

  // Add fuel type options for the dropdown
  fuelTypes = [
    { value: 'GASOLINE', label: 'Gasoline' },
    { value: 'DIESEL', label: 'Diesel' },
    { value: 'HYBRID', label: 'Hybrid' },
    { value: 'ELECTRIC', label: 'Electric' }
  ];

  ngOnInit(): void {
    // Initialize any required data
  }

  calculateCustomsSavings(): void {
    if (!this.vehicle.prix || this.vehicle.prix <= 0) {
      this.vehicle.customsSavings = 0;
      return;
    }

    const baseRate = 0.5; // 50% base savings for FCR
    let savings = this.vehicle.prix * baseRate;
    
    // Additional rules based on vehicle type/year
    if (this.vehicle.typeCarburant === 'ELECTRIC') {
      savings *= 1.2; // Extra 20% for electric vehicles
    } else if (this.vehicle.anneeFabrication < (this.currentYear - 5)) {
      savings *= 0.8; // 20% less for older vehicles
    }
    
    this.vehicle.customsSavings = Math.round(savings);
  }

  saveVehicle(form: NgForm): void {
    if (form.valid) {
      this.calculateCustomsSavings();
      console.log('Saving vehicle:', this.vehicle);
      // Add your API call here
      alert(`Vehicle saved successfully!\nCustoms savings: ${this.vehicle.customsSavings} TND`);
    } else {
      this.markFormAsTouched(form);
      alert('Please fill all required fields correctly');
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm({
      id: null,
      longitude: 10.1815,
      latitude: 36.8065,
      marque: '',
      modele: '',
      anneeFabrication: this.currentYear,
      kilometrage: 0,
      numeroSerie: '',
      couleur: '',
      typeCarburant: 'GASOLINE',
      prix: 0,
      caracteristiquesSupplementaires: '',
      customsSavings: 0
    });
  }

  private markFormAsTouched(form: NgForm): void {
    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsTouched();
    });
  }
}