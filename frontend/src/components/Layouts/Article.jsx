import { Nav } from "react-bootstrap";

const Article = ({ articles }) => {
  return (
    <main className="news-grid">
      {articles.map((item) => (
        <div key={item.id} className="news-card">
          <img
            src={item.url_to_image}
            alt={item.title}
            className="news-image"
          />
          <div className="news-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  color: "#4a90e2",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                {item.author.split(",")[0]}
              </span>
              <span style={{ color: "#666666", fontSize: "0.875rem" }}>
                {item.published_at}
              </span>
            </div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                fontFamily: "Poppins",
                marginBottom: "8px",
                color: "#1a1a1a",
              }}
            >
              {item.title}
            </h2>
            <p style={{ color: "#666666" }}>
              {item.description.substr(0, 100)}
            </p>
            <Nav.Link href={item.url} target="_blank">
              <button
                className="button-primary"
                style={{
                  width: "auto",
                  marginTop: "16px",
                  padding: "8px 16px",
                }}
              >
                Read More
              </button>
            </Nav.Link>
          </div>
        </div>
      ))}

      <style jsx global>{`
        .button-primary {
          width: 100%;
          padding: 8px;
          margin-bottom: 16px;
          font-family: "Poppins", sans-serif;
          background: #4a90e2;
          color: white;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 80rem;
          margin: 32px auto;
          padding: 16px;
        }
        .news-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .news-card:hover {
          transform: scale(1.05);
        }
        .news-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
        }
        .news-content {
          padding: 16px;
        }
      `}</style>
    </main>
  );
};

export default Article;
