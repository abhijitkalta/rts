import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child
        color="red"
        onClick={() => {
          console.log("Hello");
        }}
      />
      <ChildAsFC
        color="red"
        onClick={() => {
          console.log("Hello FC");
        }}
      >
        <p>Abhijt</p>
      </ChildAsFC>
    </div>
  );
};

export default Parent;
