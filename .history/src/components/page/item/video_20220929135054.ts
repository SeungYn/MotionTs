import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent {
  constructor(title: string, url: string) {
    super(`
		<iframe
  width='1190'
  height='669'
  src='https://www.youtube.com/embed/dHrI-_xq1Vo'
  title='객체지향 Class 문법 10분만에 이해시켜줌 (자바스크립트)'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  allowfullscreen
></iframe>;
		`);
  }
}

<iframe
  width='1190'
  height='669'
  src='https://www.youtube.com/embed/dHrI-_xq1Vo'
  title='객체지향 Class 문법 10분만에 이해시켜줌 (자바스크립트)'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  allowfullscreen
></iframe>;
