import { Circles, Instructions, Stars } from "../parts";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sixteen = () => {
  const [styles, setStyles] = useState<string>("");
  const ideal_style1 = "align-self:end;";
  const ideal_style2 = "align-self:flex-end;";
  const ideal_style = ideal_style1 || ideal_style2;
  const yes: boolean =
    styles.replaceAll(" ", "").includes(ideal_style1) ||
    styles.replaceAll(" ", "").includes(ideal_style2);
  const navigate = useNavigate();
  return (
    <div className="w-screen lg:flex flex-row-reverse">
      <div className="w-full p-2 pt-5 h-[400px] flex justify-center lg:h-screen bg-[#2c2c2c]">
        <div className="w-60%">
          <TargetContainer idealStyle="">
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles styling={ideal_style} colors="gold" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Container clientStyle="">
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars styling={styles} colors="gold" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
            </Container>
          </TargetContainer>
        </div>
      </div>
      <div className="w-full pb-12 lg:h-screen relative bg-[#ffde22]">
        <div>
          <Instructions
            level={16}
            first="Another property you can apply to individual items is align-self. This property accepts the same values as align-items and its value for the specific item."
            second=""
          />
          <div className="w-11/12 mr-[30px] m-auto py-[20px] flex flex-col gap-[10px] bg-[#d1b61c] rounded-xl">
            <div className="ml-[20px] font-[600]"> {".stars {"} </div>
            <div className="ml-[35px]"> {"display: flex ;"} </div>
            <div className="ml-[35px]"> {"align-items: flex-start;"} </div>
            <div className="ml-[20px] font-[600]"> {"}"} </div>
            <div className="ml-[20px]"> {".gold {"} </div>
            <textarea
              onChange={(e) => {
                setStyles(e.target.value);
              }}
              className="w-11/12 p-2 focus:outline-none ml-[35px]"
            />
            <div className="ml-[20px]"> {"}"} </div>
            <div className="flex justify-center">
              {yes ? (
                <button
                  onClick={() => {
                    navigate("/17");
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

export default Sixteen;

const TargetContainer = styled.div<{ idealStyle: string }>`
  width: 91.666667%;
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
