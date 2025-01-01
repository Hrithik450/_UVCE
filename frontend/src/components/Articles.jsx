// components/Articles.js
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ArticlesWrapper = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;
  @media (max-width: 768px) {
    padding: 0rem 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    h2 {
      color: black;
      font-size: 2.5rem;
      flex-basis: 100%;
    }

    .content {
      flex-basis: 100%;
      text-align: right;

      p {
        margin: 1rem 0;
      }

      button {
        padding: 0.5rem 3rem;
        border-radius: 20px;
        font-weight: bold;
        color: white;
        background-color: black;
      }
    }
  }

  .articles {
    display: flex;
    gap: 20px;
    justify-content: center;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .card {
    flex-basis: 100%;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: auto;
    height: max-content;
    text-align: center;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    .button {
      margin-top: 15px;
      background-color: black;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    h3 {
      max-width: 80%;
      background-color: black;
      margin: auto;
      color: white;
      border-radius: 20px;
      padding: 0.5rem 2rem;
      margin: 1rem 0;
    }

    h4 {
      text-align: left;
    }

    .quote {
      color: black;
      font-weight: bold;
      text-align: left;
      margin: 1rem 0;
      font-size: 1.3rem;
    }

    .desc {
      text-align: left;
      font-size: 1rem;
    }
  }
`;

const Information = [
  {
    type: "Announcement",
    url: "https://tse3.mm.bing.net/th?id=OIP.tRupMyNKXmzeRMNhs-bwQAHaHa&pid=Api&P=0&h=180",
    date: "08-Aug-2024",
  },
  {
    type: "workshop",
    url: "https://tse4.mm.bing.net/th?id=OIP.e3KH7ximjCnTWCvgbI2GdwHaE8&pid=Api&P=0&h=180",
    date: "09-Nov-2024",
  },
  {
    type: "seminar",
    url: "https://tse2.mm.bing.net/th?id=OIP.o8d0STltT9yqVBNZrR96DgHaE8&pid=Api&P=0&h=180",
    date: "10-Dec-2024",
  },
];

const Articles = () => (
  <ArticlesWrapper>
    <div className="header">
      <h2>Check out our Latest Articles and Knowledge</h2>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!
          Corporis iusto eos magni a odio saepe vel, impedit cum cumque
          molestias accusamus. Ipsum dolorum incidunt nesciunt?
        </p>
        <button className="button">View All</button>
      </div>
    </div>
    <div className="articles">
      {Information.map((Info, idx) => (
        <div className="card" key={idx}>
          <img src={Info.url} alt={`Article ${Info.type}`} />
          <h3>{Info.type}</h3>
          <h4>{Info.date}</h4>
          <p className="quote">Tips on how you can stay updated in college.</p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            accusantium. Ad perspiciatis facilis debitis!
          </p>
        </div>
      ))}
    </div>
  </ArticlesWrapper>
);

export default Articles;
