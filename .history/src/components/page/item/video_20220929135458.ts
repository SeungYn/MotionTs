import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
		<section class="video">
  <div class="video__player">
    <iframe class="video__iframe" src="" frameborder="0"></iframe>
  </div>
  <h3 class="video__title"></h3>
</section>
		`);

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;

    iframe.src = 'https://www.youtube.com/embed/dHrI-_xq1Vo'; // url -> videoId

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe
//   width='1190'
//   height='669'
//   src='https://www.youtube.com/embed/dHrI-_xq1Vo'
//   title='객체지향 Class 문법 10분만에 이해시켜줌 (자바스크립트)'
//   frameborder='0'
//   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//   allowfullscreen
// ></iframe>;
