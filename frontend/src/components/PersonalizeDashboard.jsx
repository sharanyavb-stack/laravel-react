import { Container, Accordion } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import useCustomization from "../hooks/useCustomization";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./common/Loading";
import { Navigate } from "react-router-dom";

const PersonalizeDashboard = () => {
  const { loginStorageData, userLogout } = useAuth();
  const { sources, authors, categories } = useCustomization();
  const [loading, setLoading] = useState(false);
  const userId = loginStorageData?.user?.id || "";

  const [checkSource, setCheckSource] = useState([]);
  const [checkAuthor, setCheckAuthor] = useState([]);
  const [checkCategory, setCheckCategory] = useState([]);

  // this hook method brings all user setting data
  useEffect(() => {
    if (userId) {
      (async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/checkSetting?user=${userId}`
          );
          setCheckSource(response.data.sources.map((item) => item.name));
          setCheckAuthor(response.data.authors.map((item) => item.name));
          setCheckCategory(response.data.categories.map((item) => item.name));
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      })();
    }
  }, [userId]);

  // this method will update and delete user setting for customized news feed
  const handleCheckbox = async (checkedVal, nameVal, checked) => {
    // const checkedVal = event.target.value;
    // const nameVal = event.target.name;

    if (checkCategory.includes(checkedVal))
      setCheckCategory(checkCategory.filter((item) => item !== checkedVal));
    else setCheckCategory([...checkCategory, checkedVal]);

    if (checkAuthor.includes(checkedVal))
      setCheckAuthor(checkAuthor.filter((item) => item !== checkedVal));
    else setCheckAuthor([...checkAuthor, checkedVal]);

    if (checkSource.includes(checkedVal))
      setCheckSource(checkSource.filter((item) => item !== checkedVal));
    else setCheckSource([...checkSource, checkedVal]);

    if (checked)
      await axios.post("http://127.0.0.1:8000/api/storeSetting", {
        user_id: userId,
        name: checkedVal,
        type: nameVal,
      });
    else
      await axios.post("http://127.0.0.1:8000/api/deleteSetting", {
        user_id: userId,
        name: checkedVal,
        type: nameVal,
      });
  };
  
  if (!userId) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container className="mt-3">
      {loading && <Loading />}
      <div style={{ marginBottom: "32px" }}>
        <div
          className="mb-3 mt-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Personalize Your Feed
          </h2>
          <h5>Account: {loginStorageData?.user?.email}</h5>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Favorite Sources</Accordion.Header>
            <Accordion.Body>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {sources.map((source) => (
                  <button
                    key={source?.api}
                    onClick={() =>
                      handleCheckbox(
                        source?.api,
                        "source",
                        !checkSource.includes(source.api)
                      )
                    }
                    className="customise-select-button"
                    style={{
                      background: !checkSource.includes(source.api)
                        ? "#2563eb"
                        : "transparent",
                      color: !checkSource.includes(source.api)
                        ? "white"
                        : "#2563eb",
                    }}
                  >
                    
                    {source?.api}
                  </button>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Favorite Categories</Accordion.Header>
            <Accordion.Body>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {categories.map((category) => (
                  <button
                    key={category?.category}
                    onClick={() =>
                      handleCheckbox(
                        category?.category,
                        "category",
                        !checkCategory.includes(category.category)
                      )
                    }
                    className="customise-select-button"
                    style={{
                      background: !checkCategory.includes(category.category)
                        ? "#2563eb"
                        : "transparent",
                      color: !checkCategory.includes(category.category)
                        ? "white"
                        : "#2563eb",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ marginRight: "8px" }}
                    ></i>
                    {category?.category}
                  </button>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Favorite Authors</Accordion.Header>
            <Accordion.Body>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {authors.map((author) => (
                  <button
                    key={author?.author}
                    onClick={() =>
                      handleCheckbox(
                        author?.author,
                        "author",
                        !checkAuthor.includes(author.author)
                      )
                    }
                    className="customise-select-button"
                    style={{
                      background: !checkAuthor.includes(author.author)
                        ? "#2563eb"
                        : "transparent",
                      color: !checkAuthor.includes(author.author)
                        ? "white"
                        : "#2563eb",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ marginRight: "8px" }}
                    ></i>
                    {author?.author}
                  </button>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <style jsx global>{`
        .customise-select-button {
          padding: 8px 16px;
          border-radius: 9999px;
          border: 1px solid #2563eb;
          transition: all 0.3s;
        }
      `}</style>
    </Container>
  );
};

export default PersonalizeDashboard;
