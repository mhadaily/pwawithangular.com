import React from 'react';
import {
  CallToAction,
  Faq,
  Testimonials,
  Blog,
  TableOfContent,
  Video,
  Author,
  Banner,
  Benefits,
  Layout,
  Header,
  Features,
  SEO,
} from '../components';
import PageProps from '../models/PageProps';
import config from '../../config/SiteConfig';
import { IFeature } from '../models/Feature';
import { ISlide } from '../models/Slide';
import { IFaq } from '../models/Faq';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const featuresData: IFeature[] = [
  {
    index: 0,
    icon: faAngular,
    title: 'Angular Service Worker',
    description: `Learn about Angular Service Worker module inside-out. You will learn from the basic concepts to the advanced skills to build
    your Progressive Web Application using Angular.`,
  },
  {
    index: 1,
    title: 'Angular & Workbox',
    description: `Need more flexible alternative to Angular Service Worker? Two dedicated chapters about Workbox and Angular which you can learn the most and turn your Angular application
    into a PWA.`,
  },
  {
    index: 2,
    icon: faGlobe,
    title: 'Modern APIs',
    description: `Progressive Web Applications are not just about specific APIs but you can still leverage modern APIs in browsers such as WebBluetooth, WebUSB, Payment Request, Credential Management
    API and more.`,
  },
];

const slidesData: ISlide[] = [
  {
    name: 'John Papa',
    position: 'Community leader',
    content: 'Sed ut perpiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/1.jpg',
    style: { left: 'calc(50% - 40px)', top: '75px' },
  },
  {
    name: 'Majid Hajian',
    position: 'Community leader',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/2.jpg',
    style: { left: 0, top: '140px' },
  },
  {
    name: 'Maxim Salnikov',
    position: 'Community leader',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/3.jpg',
    style: { left: ' calc(100% - 80px)', top: '300px' },
  },
  {
    name: 'Sherry List',
    position: 'Community leader',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/4.jpg',
    style: { left: 'calc(100% - 80px)', top: '200px' },
  },
  {
    name: 'Chris Nori',
    position: 'Community leader',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/5.jpg',
    style: { left: '50%', top: '63%' },
  },
  {
    name: 'Chris Nori',
    position: 'Community leader',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/6.jpg',
    style: { left: '27%', top: '30%' },
  },
  {
    name: 'Chris Nori',
    position: 'Community leader',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam.',
    avatar: 'assets/avatar/7.jpg',
    style: { left: '27%', top: ' 54%' },
  },
];

const questions: IFaq[] = [
  {
    title: 'What does the book include?',
    answer: `We cover PWA fundamentals, Angular Service Worker basic and advanced skills, Workbox and Modern APIs. All code samples and demos will be provided
    and you can either download or clone from Github.`,
  },
  {
    title: 'How will you keep the content updated?',
    answer: ` Great questions, We will constantly blog about new features and will refrence them in this website too. So, make sure you are in our newsletter list and we will inform you when a new blog is out.`,
  },
  {
    title: 'How can I get discount?',
    answer: `We do provide discount code especially for those who are in countries that the price of book is too high for them.
    simply fill <a href="http://bit.ly/2K5QfzE" target="_blank" rel="noopener" className="color-5">contact form</a> and let us know what's your issue and we will help you to get this book
    as soon as possible.`,
  },
  {
    title: 'Can I suggest a new feature or content?',
    answer: `Definitely <span className="bold">Yes</span>, you can contact us to let us know your needs and feedbacks, we will try to
    cover it. out ultimate goal is stand with you as much as possible to help you until you success. <a href="http://bit.ly/2K5QfzE" target="_blank" rel="noopener" className="color-5">Please let us know</a>`,
  },
  {
    title: 'How can I contact you?',
    answer: `It's simple, just fill this <a href="http://bit.ly/2K5QfzE" target="_blank" rel="noopener" className="color-5">form</a> and we will get back to you as soon as possible.`,
  },
];
const benefits = [
  {
    title: 'Development',
    description: 'Learn how development works in Angular PWA',
  },
  {
    title: 'Debug',
    description: 'Learn how to debug your application.',
  },
  {
    title: 'Tips / Tricks',
    description: 'Learn tips and tricks that you need for your PWA.',
  },
  {
    title: 'Modern Web',
    description: 'Learn new modern APIs and use them in your application.',
  },
];
export default class IndexPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <SEO title={`${config.siteTitle}`} />
        <main>
          <Header />
          <Features id="Features" data={featuresData} subtitle="Reasons to read" title="Leverage Angular to build your next PWA" />
          <TableOfContent id="TableOfContent" />
          <Benefits
            id="Benefits"
            list={benefits}
            title="We offer tons of content"
            subtitle="Learn all you need to know about PWA and Angular"
          />
          <Banner id="Banner" />
          <Author id="Author" />
          <Video id="Video" />
          {/* <Promotion id="Promotion" /> Temporary shown in Video component */}
          <Testimonials data={slidesData} id="Testimonials" />
          <Faq data={questions} id="Faq" />
          <CallToAction id="CallToAction" />
          <Blog id="Blog" />
        </main>
      </Layout>
    );
  }
}
