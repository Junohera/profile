import React from 'react';
import profileImage from "../image/home/profile.JPG";
import './Home.css';
import CONST from '../common/const';

class Home extends React.Component{

    // TODO: 기준날짜로부터 오늘 날짜 0 부터 애니메이션
    state = {
        dayList: [{
            id: 0,
            name: 'age',
            day: 0.
          },
          {
            id: 1,
            name: 'devAge',
            day: 0
          },
          {
            id: 2,
            name: 'tooth',
            day: 0
          }
        ]
    }

    _renderDayList = () => {
        const dayList = this.state.dayList.map(
            day => {
                console.log('day => ', day)
                return <Day 
                    name={day.name}
                    day={day.day}
                />
            }
        )
        return dayList;
    }

    componentDidMount() {
        this.computeAge(CONST.HOME);
    }

    computeAge = ({numberMap}) => {
        const { dayList } = this.state;
        this.setState({
            dayList: dayList.map(
                  day => {
                      return {
                          ...day,
                          day:(() => {
                              let diff = new Date().getTime() - new Date(numberMap[day.id]).getTime();
                            //   return diff/(1000 * 3600 * 24)
                              return Math.ceil(diff/(1000 * 3600 * 24));
                          })()
                          
                      }
                  }
              )
        })
    }

    
    

    render() {
        return (
            <div>
    
                <div className="Profile_triangle">
                    <div className="shape"></div>
                </div>
            
                <div className="Profile">
    
                    <div className="Profile_left">
                        <div></div>
                        <img src={profileImage}></img>
                    </div>
    
                    <div className="Profile_center">
                        <h1><span>Juno</span>'s profile</h1>
                    </div>
    
                    <div className="Profile_right">
                    <div className="content">
                        <ul>
                            {this._renderDayList()}
                        </ul>
                        <p>ABOUT</p>
                        <p>
                            안녕하세요 26살 개발자 주노입니다.<br/>
                            이 페이지는 개발자인 저를 소개하는 동시에 저의 개인 프로필페이지입니다.<br/>
                            강의, 커뮤니티, 컨퍼런스 등과 같이, 채용 목적이 아니더라도<br/>
                            자유롭게 둘러보시고, 공개된 정보로 연락을 취하셔도 무방합니다.<br/>
                            어차피 답장은 저의 몫이니까요 ^-^...;;<br/>
                        </p>
                    </div>
                    <div className="dim"></div>
                    <div className="border"></div>
                    </div>
                    
                </div>
            </div>
        );
    }
    
};



function Day({name, day}){
    return (
        <li>
            <p>{day}</p>
            <p>{name}</p>
        </li>
    );
};

export default Home;