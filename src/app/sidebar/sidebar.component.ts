import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Typewriter from 't-writer.js';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle: ElementRef;
  links: Array<LinkModel> = [
    { 
      link: 'https://github.com/LucasFernandez11',
      icon: '<i class="uil uil-github"></i>'
    },
    { 
      link: 'https://www.linkedin.com/in/fernandezlucas-it/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    { 
      link: 'mailto:lucas.fernamdez.lmf11@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
  ] 
  dataProfile: any;

  constructor(private gitHubService: GithubService) {
  }

  ngOnInit(): void {
    this.gitHubService.getRepo()
      .subscribe(res => this.dataProfile = res);
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer
      .changeCursorColor('white')
      .type('Hola! ')
      .rest(5000)
      .clear()
      .type('Me llamo Lucas Fernandez')
      .rest(5000)
      .clear()
      .type('¿conoces mi trabajo?')
      .rest(5000)
      .start();

  };


}

class LinkModel {
  link: string;
  icon: string;
}
