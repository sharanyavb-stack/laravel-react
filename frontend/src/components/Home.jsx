import {
  Dropdown,
  InputGroup,
  Row,
  FormControl,
  DropdownButton,
  Container,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ArrowLeftSquareFill,
  ArrowRightSquareFill,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import useArticleList from "../hooks/useArticleList";
import Article from "./Layouts/Article";
import { useAuth } from "../contexts/AuthContext";
import Loading from "./common/Loading";
import Filter from "./Filter/Filter";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const { loginStorageData } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [articlesShow, setArticlesShow] = useState([]);
  const userId = loginStorageData?.user?.id || "";

  const api = `http://127.0.0.1:8000/api/articles?s=${searchValue}&sort=desc&date=${selectedDate}&category=${selectedCategory}&source=${selectedSources}&page=${pageNo}&user=${userId}`;

  const { articles, lastPage, loading } = useArticleList(api);

  useEffect(() => {
    setArticlesShow([...articlesShow, ...articles]);
  }, [articles]);

  const handleSources = (value) => {
    setSelectedSources(value);
    setPageNo(1);
    setArticlesShow([]);
  };

  const handleDate = (value) => {
    setSelectedDate(value);
    setPageNo(1);
    setArticlesShow([]);
  };

  const handleCategory = (value) => {
    setSelectedCategory(value);
    setPageNo(1);
    setArticlesShow([]);
  };

  const fetchMoreData = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <Container className="mt-2 minHeight">
      {loading && !searchValue && <Loading />}
      <Row>
        <InputGroup className="my-3">
          <FormControl
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-light"
            style={{
              maxWidth: "768px",
              margin: "0 auto",
              display: "block",
              background: "white",
              color: "#111",
              border: "1px solid #ddd",
              borderRadius: "9999px",
              padding: "16px 24px",
              marginRight: "16px",
            }}
          />
          <Filter
            selectedSources={handleSources}
            selectedDate={handleDate}
            selectedCategory={handleCategory}
          />
        </InputGroup>
        {userId && (
          <div className="text-center">
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid rgb(37, 99, 235)",
                borderRadius: "9999px",
                backgroundColor: "rgb(37, 99, 235)",
                color: "#FFF",
                cursor: "pointer",
              }}
            >
              <NavLink to={"/personalize"} className={"nav-link"}>
                Personalize Your Feed Here
              </NavLink>
            </button>
          </div>
        )}

        <InfiniteScroll
          dataLength={articlesShow?.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={pageNo < lastPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Article articles={articlesShow || []} />
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

export default Home;
