import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  selectedPlace: string = '';
  selectedMovie: string = '';
  selectedTheatre: any;
  

  places: string[] = ['chennai', 'bangalore', 'mumbai'];
  movies: any = {
    'chennai': ['Movie 1', 'Movie 2', 'Movie 3'],
    'bangalore': ['Movie A', 'Movie B', 'Movie C'],
    'mumbai': ['Movie X', 'Movie Y', 'Movie Z']
  };
  theatresAndTimings: any = {
    'Movie 1': [{ theatre: 'Theatre 1', timing: '10:00 AM' }, { theatre: 'Theatre 2', timing: '1:00 PM' }],
    'Movie 2': [{ theatre: 'Theatre 3', timing: '3:00 PM' }, { theatre: 'Theatre 4', timing: '6:00 PM' }],
    'Movie 3': [{ theatre: 'Theatre 3', timing: '3:00 PM' }, { theatre: 'Theatre 4', timing: '6:00 PM' }],
    'Movie A': [{ theatre: 'Theatre 5', timing: '9:00 AM' }, { theatre: 'Theatre 6', timing: '12:00 PM' }],
    'Movie B': [{ theatre: 'Theatre 7', timing: '2:00 PM' }, { theatre: 'Theatre 8', timing: '5:00 PM' }],
    'Movie C': [{ theatre: 'Theatre 3', timing: '3:00 PM' }, { theatre: 'Theatre 4', timing: '6:00 PM' }],
    'Movie X': [{ theatre: 'Theatre 9', timing: '11:00 AM' }, { theatre: 'Theatre 10', timing: '4:00 PM' }],
    'Movie Y': [{ theatre: 'Theatre 11', timing: '7:00 PM' }, { theatre: 'Theatre 12', timing: '9:00 PM' }],
    'Movie Z': [{ theatre: 'Theatre 3', timing: '3:00 PM' }, { theatre: 'Theatre 4', timing: '6:00 PM' }],
  };

  submitBooking(form: any) {
 
    console.log("Booking details:", form.value);
  }
}