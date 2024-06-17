import { Component, OnInit } from '@angular/core';
import { ApiService } from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  time!: Date;
  apparentTemperature!: number;
  temperature!: number;
  windSpeed!: number;
  windDirection!: number;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getWeather().then((data) => {
      this.time = data.current.time;
      this.temperature = Math.round(data.current.temperature2m);
      this.apparentTemperature = Math.round(data.current.apparentTemperature);
      this.windSpeed = Math.round(data.current.windSpeed10m);
      this.windDirection = Math.round(data.current.windDirection10m);
    });
  }

  onSubmit() {
    this.api.getWeather();
  }
}
