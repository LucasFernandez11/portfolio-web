import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any = [
    {
      src: 'https://www.linkedin.com/in/fernandezlucas-it/',
      name: 'Github',
    },
    {
      src: 'https://github.com/LucasFernandez11',
      name: 'Github'
    },
    {
      src: 'mailto:lucas.fernamdez.lmf11@gmail.com',
      name: 'Contacto'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
