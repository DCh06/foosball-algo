import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


interface Lobby {
  Ondros: string,
  Radkos: string,
  Majkl: string,
  Filipos: string,
  Denny: string,
}

interface Zapas {
  tym1: string,
  tym2: string,
  stridac: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foosball-algo';
  lobby?: Lobby;
  zapasy: Zapas[] = [];

  lobbyForm = this.fb.nonNullable.group<Lobby>({
    Ondros: '',
    Radkos: '',
    Majkl: '',
    Filipos: '',
    Denny: '',
  });


  get f() {
    return this.lobbyForm.controls;
  }

  constructor(private fb: FormBuilder) {

  }


  generujZapasy() {

    this.lobbyForm.controls.Denny.setValue(this.lobbyForm.controls.Denny.value || 'Denny');
    this.lobbyForm.controls.Filipos.setValue(this.lobbyForm.controls.Filipos.value || 'Filipos');
    this.lobbyForm.controls.Majkl.setValue(this.lobbyForm.controls.Majkl.value || 'Majkl Golees');
    this.lobbyForm.controls.Ondros.setValue(this.lobbyForm.controls.Ondros.value || 'Ondros');
    this.lobbyForm.controls.Radkos.setValue(this.lobbyForm.controls.Radkos.value || 'Radkos');

    // oyeb
    this.lobby = this.lobbyForm.value as Lobby;
    this.generujZapasyBruteForce();
  }

  vyclearujLobby() {
    this.lobby = undefined;
    this.zapasy = [];
  }

  private generujZapasyBruteForce() {
    this.zapasy = [];
    const [Denny, Filipos, Majkl, Ondros, Radkos] =
      [this.lobbyForm.controls.Denny.value,
      this.lobbyForm.controls.Filipos.value,
      this.lobbyForm.controls.Majkl.value,
      this.lobbyForm.controls.Ondros.value,
      this.lobbyForm.controls.Radkos.value,
      ];

    this.zapasy.push(
      {
        tym1: `[${Filipos} | ${Radkos}]`,
        tym2: `[${Ondros} | ${Denny}]`,
        stridac: `${Majkl} `
      },
      {
        tym1: `[${Radkos} | ${Majkl}]`,
        tym2: `[${Denny} | ${Filipos}]`,
        stridac: `${Ondros} `
      },
      {
        tym1: `[${Majkl} | ${Ondros}]`,
        tym2: `[${Denny} | ${Radkos}]`,
        stridac: `${Filipos} `
      },
      {
        tym1: `[${Denny} | ${Majkl}]`,
        tym2: `[${Filipos} | ${Ondros}]`,
        stridac: `${Radkos} `
      },
      {
        tym1: `[${Radkos} | ${Ondros}]`,
        tym2: `[${Filipos} | ${Majkl}]`,
        stridac: `${Denny} `
      },
    );

    this.zapasy.sort((a, b) => {
      if (Math.random() === 0.5) { return 0; }
      return Math.random() < 0.5 ? 1 : -1;
    }
    )
  }

  de() {
    console.log(this.f.Ondros.value);
    ;
  }

}
