import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movies: Movie[] = [
    new Movie('V for Vendetta', 2005, 'Remember the fifth of November.'),
    new Movie('Harry Potter', 2001),
    new Movie('The Matrix', 1999),
  ];

  @Input() newMovieTitle: string = '';
  @Input() newMovieYear: string = '';
  @Input() newMoviePlot: string = '';

  addNewMovie() {
    this.movies.push(
      new Movie(
        this.newMovieTitle,
        parseInt(this.newMovieYear),
        this.newMoviePlot
      )
    );

    this.newMovieTitle = '';
    this.newMovieYear = '';
    this.newMoviePlot = '';
  }
}
