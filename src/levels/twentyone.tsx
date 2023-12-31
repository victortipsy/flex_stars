import { Circles, Instructions, Stars } from "../parts";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TwentyOne = () => {
  const [styles, setStyles] = useState<string>("");
  const ideal_style1 = "align-content:flex-start;";
  const ideal_style2 = "align-content:start;";
  const ideal_style = ideal_style1 || ideal_style2;
  const yes: boolean =
    styles.replaceAll(" ", "").includes(ideal_style1) ||
    styles.replaceAll(" ", "").includes(ideal_style2);
  const navigate = useNavigate();
  return (
    <div className="w-screen md:h-fit bg-[#2c2c2c] md:flex flex-row-reverse">
      <div className="w-full p-2 pt-5 h-[400px] flex justify-center items-center md:min-h-[100vh] bg-[#2c2c2c]">
        <div className="w-[300px] h-[300px]">
          <TargetContainer idealStyle={ideal_style.concat("flex-wrap: wrap;")}>
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Container clientStyle={"flex-wrap: wrap;".concat(styles)}>
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
              <Stars colors="gold" />
            </Container>
          </TargetContainer>
        </div>
      </div>
      <div className="w-full pb-12 md:h-fit relative bg-[#ffde22]">
        <div>
          <Instructions
            level={21}
            first="Eniola is spread all over the pond, but the circles are bunched at the top. You can use align-content to set how multiple lines are spaced apart from each other. This property takes the following values:"
            second="flex-start: Lines are packed at the top of the container.
flex-end: Lines are packed at the bottom of the container.
center: Lines are packed at the vertical center of the container.
space-between: Lines display with equal spacing between them.
space-around: Lines display with equal spacing around them.
stretch: Lines are stretched to fit the container."
            third="This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect."
          />
          <div className="w-11/12 md:mr-[30px] m-auto py-[20px] flex flex-col gap-[10px] bg-[#d1b61c] rounded-xl">
            <div className="ml-[20px] font-[600]"> {".stars {"} </div>
            <div className="ml-[35px]"> {"display: flex ;"} </div>
            <textarea
              onChange={(e) => {
                setStyles(e.target.value);
              }}
              className="w-[calc(100% - 40px)] p-2 focus:outline-none ml-[35px]"
            />
            <div className="ml-[20px] font-[600]"> {"}"} </div>
            <div className="flex justify-center">
              {yes ? (
                <button
                  onClick={() => {
                    navigate("/22");
                  }}
                  className="bg-[green] rounded-[4px] text-slate-50 py-1 px-3 transition-all duration-[350ms] cursor-pointer hover:outline-none focus:outline-none">
                  NEXT
                </button>
              ) : (
                <button className="bg-[silver] rounded-[4px] text-slate-500 py-1 px-3 transition-all duration-[350ms] cursor-not-allowed hover:outline-none focus:outline-none">
                  NEXT
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-11/12 absolute bottom-[7px] mt-4 mr-[30px] flex justify-center m-auto">
          @latest
        </div>
      </div>
    </div>
  );
};

export default TwentyOne;

const TargetContainer = styled.div<{ idealStyle: string }>`
  width: 100%;
  margin: auto;
  margin-right: 30px;
  height: 100%;
  position: relative;
  transition: all 350ms;
  display: flex;
  gap: 10px;
  ${({ idealStyle }) => idealStyle}
`;
const Container = styled.div<{ clientStyle: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 350ms;
  display: flex;
  gap: 10px;
  ${({ clientStyle }) => clientStyle}
`;
