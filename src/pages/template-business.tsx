import { FunctionComponent } from "react";
import styles from "./template-business.module.css";
const TemplateBusiness: FunctionComponent = () => {
  return (
    <div className={styles.templateFashionStyle}>
      <div className={styles.templateFashionStyleChild} />
      <div className={styles.page130Container}>
        <ul className={styles.ul}>
          <li className={styles.li}>작업 소요시간</li>
        </ul>
        <p className={styles.blankLine}>&nbsp;</p>
        <ul className={styles.ul}>
          <li
            className={styles.li}
          >{`한 페이지의 클론 디자인에 소요되는 시간(피그마에서 디자인생성, 파일이름 변경) `}</li>
        </ul>
        <p className={styles.blankLine}>{`--> 1page당 약 1시간30분 소요`}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            한 페이지를 locofy 작업으로 코드 생성까지 소요되는
            시간(오토레이아웃,태깅,코드생성)
          </li>
        </ul>
        <p
          className={styles.page330}
        >{`--> 1page당 약 3시간30분 소요(복잡한 구조)`}</p>
      </div>
      <div className={styles.div}>
        <ul className={styles.ul}>
          가능한 기술과 불가능한 기술(디자인, 마이크로인터렉션)
        </ul>
      </div>
      <div className={styles.div1}>
        <ul className={styles.ul}>불가능한 기술</ul>
      </div>
      <div className={styles.div2}>구글 맵 지원</div>
      <div className={styles.div3}>
        <ul className={styles.ul}>가능한 기술</ul>
      </div>
      <div className={styles.div4}>
        <div className={styles.div5}>이미지에 마우스 호버시 하단 버튼 출력</div>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      </div>
      <div className={styles.div6}>
        <div className={styles.div7}>마우스 호버시 아이콘 출력</div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      </div>
      <div className={styles.drawer}>
        <div className={styles.drawer1}>아이콘 클릭시 drawer 닫기 기능</div>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      </div>
      <div className={styles.div8}>
        <div className={styles.div9}>클릭시 벡터 도형에만 색 적용</div>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      </div>
      <div className={styles.div10}>
        <div className={styles.div11}>
          이미지 마우스 호버시 이미지 변경 기능
        </div>
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      </div>
      <div className={styles.div12}>
        <div className={styles.div13}>화면 스크롤시 버튼 하단고정</div>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.empty}>
        <div className={styles.empty1}>
          입력박스-empty의 경우 테두리 알림표시
        </div>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.div14}>
        <div className={styles.div15}>1번 인풋박스와 2번 버튼의 상호작용</div>
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      </div>
    </div>
  );
};

export default TemplateBusiness;
