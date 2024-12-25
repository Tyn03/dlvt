import React from "react";

// JSON giả lập
const data = {
  description: {
    header: "The short run",
    content: [
      "I developed a simple e-commerce website that allows users to buy and sell products online. The website includes the following basic features:",
      {
        type: "list",
        items: [
          "Product Listing Page: Displays a list of products with images, prices, and detailed descriptions.",
          "Shopping Cart: Allows users to add, modify, or remove products from the cart.",
          "Checkout Process: Integrates a simple checkout flow for completing orders.",
          "Product Management Page (for sellers): Enables sellers to add, edit, or delete products."
        ]
      },
      {
        type: "header",
        text: "Tech Stack & Learnings"
      },
      {
        type: "list",
        items: [
          "**Backend**: Worked with Node.js for building APIs.",
          "**Frontend**: React.js for dynamic UI, using component-based architecture.",
          "**Communication**: APIs for connecting backend and frontend."
        ]
      },
      "The project taught me the importance of modularity, as each feature had its own structure (e.g., controllers, models, etc.)."
    ]
  }
};

const App = () => {
  const { header, content } = data.description;

  return (
    <div>
      <h3 style={{ color: "#1e90ff" }}>{header}</h3>
      {content.map((item, index) => {
        if (typeof item === "string") {
          // Render đoạn văn
          return <p key={index}>{item}</p>;
        } else if (item.type === "list") {
          // Render danh sách
          return (
            <ul key={index}>
              {item.items.map((listItem, idx) => (
                <li key={idx}>
                  <strong style={{ color: "#1e90ff" }}>
                    {listItem.split(":")[0]}:
                  </strong>{" "}
                  {listItem.split(":").slice(1).join(":")}
                </li>
              ))}
            </ul>
          );
        } else if (item.type === "header") {
          // Render tiêu đề
          return <h3 style={{ color: "#1e90ff" }} key={index}>{item.text}</h3>;
        }
        return null;
      })}
    </div>
  );
};

export default App;
