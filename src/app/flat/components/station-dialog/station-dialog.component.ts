import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatAutocompleteSelectedEvent, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-station-dialog',
  templateUrl: './station-dialog.component.html',
  styleUrls: ['./station-dialog.component.scss']
})
export class StationDialogComponent implements OnInit {
  searchControl = new FormControl();
  stationOptions;
  makeRequest;
  station;
  stationForm: FormGroup;

  constructor(
    private functions: AngularFireFunctions,
    private fb: FormBuilder,
    private dialog: MatDialogRef<StationDialogComponent>
  ) {}

  ngOnInit() {
    this.stationForm = this.fb.group({
      footway: [0, Validators.required],
      results: [6, Validators.required],
      products: ['', Validators.required]
    });
    this.makeRequest = this.functions.httpsCallable('makeWebRequest');
    this.stationOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      switchMap(searchValue =>
        this.makeRequest({
          url: `https://www.mvg.de/fahrinfo/api/location/queryWeb?q=${searchValue}`
        })
      ),
      map(({ data }) =>
        data.res.locations.filter(location => location.type === 'station')
      )
    );
  }

  optionSelect(option: MatAutocompleteSelectedEvent) {
    this.searchControl.setValue('');
    console.log(option);
    this.station = option.option.value;
  }

  addStation() {
    if (this.stationForm.valid) {
      this.dialog.close({
        ...this.stationForm.value,
        id: this.station.id,
        name: this.station.name
      });
    }
  }
}
