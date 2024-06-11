import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#815bdb"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
