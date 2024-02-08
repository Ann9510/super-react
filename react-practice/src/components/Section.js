import React from "react";

const Section = () => {
  return (
    <div>
      <div>이건 div야</div>
      <p>이건 p야</p>
      <button>이건 button이야</button>
    </div>

    // <div>이건 div야</div>
    // <p>이건 p야</p>
    // <button>이건 button이야</button>
    // 위 처럼 작성하면 에러.
    // 하나의 컴포넌트에는 반드시 하나의 root element를 리턴해야함.
  );
};

export default Section;
