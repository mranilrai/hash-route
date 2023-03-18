import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: (
          <div>
            <Link to="cdps">CPD's</Link>
            <hr />
            <h1>Hello World</h1>
          </div>
        ),
        index: true,
      },
      {
        path: "cdps",
        children: [
          {
            element: (
              <div>
                <Link to="/">Home</Link>
                <hr />
                <h1>CDP's</h1>
                <Link to="/cdps/new">Create New CPD</Link>
              </div>
            ),
            index: true,
          },
          {
            path: "new",
            element: (
              <div>
                <Link to="/cdps">Back</Link>
                <hr />
                <h1>New CDP</h1>
              </div>
            ),
          },
        ],
      },
    ],
  },
]);
