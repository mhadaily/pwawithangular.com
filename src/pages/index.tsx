import React from 'react';
import { CallToAction, Faq, Testimonials, Promotion, Video, Author, Banner, Benefits, Layout, Header, Features, SEO } from '../components';
import PageProps from '../models/PageProps';
import config from '../../config/SiteConfig';
import { IFeature } from '../models/Feature';
import { ISlide } from '../models/Slide';
import { IFaq } from '../models/Faq';
import TableOfContent from '../components/TableOfContent';

const featuresData: IFeature[] = [
  {
    title: 'Angular ServiceWorker',
    description: `Learn about Angular Service worker module inside-out. You will learn from the basic concepts to the advanced skills to build
    your Progressive Web Application.`,
  },
  {
    title: 'Angular & Workbox',
    description: `Need Workbox? Two dedicated chapters about Workbox and Angular which you can learn the most and turn your Angular application
    into a PWA.`,
  },
  {
    title: 'Modern APIs',
    description: `PWA is not just about specific APIs but you can still leverage modern APIs in browsers such as WebBluetooth, WebUSB, Payment
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
    answer: `We cover PWA fundamentals, Angular Service Worker, Workbox and Modern APIs. All sample codes and demos will be provided
    and you can either download or clone from Github.`,
  },
  {
    title: 'How will you keep the content updated?',
    answer: ` Great questions, we have build another website which can be found on www.angularpwa.dev and you can always read latest
    update and changes on that website.`,
  },
  {
    title: 'How can I get discount?',
    answer: `We do provide discount code especially for those who are in countries that the price of book is too high for them.
    simply drop us an email at hi@PWAWithAngular.com and let us know what's your issue and we will help you to get this book
    as soon as possible.`,
  },
  {
    title: 'Can I suggest a new feature or content?',
    answer: `Definitely <span className="bold">Yes</span>, you can contact us to let us know your needs and feedbacks, we will try to
    cover it. out ultimate goal is stand with you as much as possible to help you until you success.`,
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
    title: 'Tips/Tricks',
    description: 'Learn tips and tricks that you need for your PWA app.',
  },
  {
    title: 'Save Time',
    description: 'Stop looking for other tutorials, read all of them in one book.',
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
          <TableOfContent />
          <Benefits
            id="Benefits"
            list={benefits}
            title="We offer a tons of content"
            subtitle="Learn all you need to know about PWA and Angular"
          />
          <Banner id="Banner" />
          <Author id="Author" />
          <Video id="Video" />
          <Promotion id="Promotion" />
          <Testimonials data={slidesData} id="Testimonials" />
          <Faq data={questions} id="Faq" />
          <CallToAction id="CallToAction" />
        </main>
      </Layout>
    );
  }
}
