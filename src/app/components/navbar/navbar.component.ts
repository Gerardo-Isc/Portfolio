import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public active(index: number) {

    const navbar = document.getElementById('navbar') as HTMLDivElement;
    const tagSections = navbar.childNodes;
    
    tagSections.forEach((a,i) => {
      const section = a as HTMLDivElement;
      if(i == index){
        section.classList.add('active');
        return;
      }
      section.classList.remove('active');
    });
  }
}
