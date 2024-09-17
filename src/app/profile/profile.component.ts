import { Component, OnInit } from '@angular/core';
import { InfoContact } from './info-contact';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements  OnInit{
  title = 'Ma Seo Sen | Software Engineer';
  faviconUrl = 'https://github.com/fluidicon.png';

  infos: InfoContact[] = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/pyhteam"',
      icon: 'ri-github-line',
    },
    // facebook
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/senms9x',
      icon: 'ri-facebook-circle-fill',
    },
    // twitter
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/senms9x',
      icon: 'ri-twitter-x-line',
    },
    // zalo
    {
      id: 'zalo',
      name: 'Zalo',
      url: 'https://zalo.me/0369962642',
      icon: 'ri-chat-3-line',
    },
  ];

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.setFavicon(this.faviconUrl);
  }

  setFavicon(url: string): void {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  sendMessage() {
    window.open('https://m.me/100052913680064', '_blank');
  }
  contact() {
    window.open('https://zalo.me/0369962642', '_blank');
  }
}
