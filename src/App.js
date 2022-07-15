import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "./styles.css";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <>
      {post.map((entry) => {
        return (
          <div id="table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>Logo</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{entry.login}</td>
                  <td>
                    <img src={entry.avatar_url} height="60" width="60" />
                  </td>
                  <td>{entry.type}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        );
      })}
    </>
  );
}
export default App;
