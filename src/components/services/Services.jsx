import React from 'react';
import './services.css';
import List from './list/List';

const Services = () => {

  return (
    <section id="services">
      <h5>What I Offer</h5>  
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <List explain="반응형 UI/UX 웹디자인&웹퍼블리싱" />
          <List explain="모바일용 UI/UX 웹디자인&웹퍼블리싱" />
          <List explain="웹용 UI/UX 웹디자인&웹퍼블리싱" />
          <List explain="웹 / 웹 UI/UX 개별 웹디자인&퍼블리싱" />
          </ul>
        </article>
      
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          <List explain="모임장소지정 웹 애플리케이션" />
          <List explain="쇼핑몰" />
          <List explain="ToDo-List" />
          <List explain="강아지 산책 대행 웹 애플리케이션" />
          <List explain="캠핑 커뮤니티" />
          <List explain="여행 커뮤니티" />
          </ul>
        </article>
      
        {/* CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
          <List explain="모임장소지정 웹 애플리케이션" />
          <List explain="쇼핑몰" />
          <List explain="ToDo-List" />
          <List explain="강아지 산책 대행 웹 애플리케이션" />
          </ul>
        </article>
      </div>
    </section>
  )
}


export default Services;